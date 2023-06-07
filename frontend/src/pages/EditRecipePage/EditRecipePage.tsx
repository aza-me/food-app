import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { FormInput } from '@/components/Form';
import { FormControl, FormLabel, Grid, Stack, Typography } from '@mui/material';
import { ReactComponent as CloseIcon } from '@/assets/icons/close.svg';
import { ReactComponent as AddIcon } from '@/assets/icons/add.svg';
import { UploadRecipeImage } from '@/components/Recipes/UploadImage/UploadImage.tsx';
import { recipesService } from '@/api';
import { CreateRecipeModel } from '@/app/models/recipe.model.ts';
import { UIButton } from '@/components/UI/UIButton';
import { useAppDispatch, useAppSelector } from '@/app/hooks/store-hooks.ts';
import { getRecipe } from '@/store/recipes/actions.ts';
import './EditRecipePage.scss';

type SubmitModel = {
  author: string;
  title: string;
  description: string;
  ingredients: { value: string }[];
  image: string;
  cookingTime: string;
};

type Params = {
  recipeId: string;
};

export const EditRecipePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { recipeId } = useParams<Params>();

  const { currentRecipe } = useAppSelector((state) => state.recipes);

  const { control, handleSubmit, setValue, getValues } = useForm<SubmitModel>({
    defaultValues: {
      ingredients: [{ value: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getRecipe(Number(recipeId)));
  }, []);

  useEffect(() => {
    if (!currentRecipe.data) return;
    const { title, description, author, image, ingredients, cookingTime } = currentRecipe.data;

    setValue('title', title);
    setValue('description', description);
    setValue('author', author);
    setValue('image', image);
    setValue('cookingTime', String(cookingTime));
    setValue(
      'ingredients',
      ingredients.map((value) => ({
        value,
      })),
    );
  }, [currentRecipe]);

  const handleCreateRecipe: SubmitHandler<SubmitModel> = async (data) => {
    if (!data.image.length) alert('Выберите файл!');

    try {
      setLoading(true);

      const createRecipeData: CreateRecipeModel = {
        title: data.title,
        author: data.author,
        description: data.description,
        ingredients: data.ingredients.map((i) => i.value),
        image: data.image,
        cookingTime: Number(data.cookingTime),
      };

      const { data: recipe } = await recipesService.editRecipe(Number(recipeId), createRecipeData);

      navigate(`/recipes/${recipe.id}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="create-recipe">
        <form onSubmit={handleSubmit(handleCreateRecipe)}>
          <Grid container rowSpacing="20px" columnSpacing="20px">
            <Grid item xs={12}>
              <UploadRecipeImage
                preview={getValues('image')}
                onChange={(base64) => {
                  setValue('image', base64);
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl>
                <FormLabel required>Автор</FormLabel>
                <FormInput name="author" control={control} rules={{ required: 'Заполните поле' }} />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl>
                <FormLabel required>Название</FormLabel>
                <FormInput name="title" control={control} rules={{ required: 'Заполните поле' }} />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel required>Время приготовления (в минутах)</FormLabel>
                <FormInput type="number" name="cookingTime" control={control} rules={{ required: 'Заполните поле' }} />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel required>Описание</FormLabel>
                <FormInput name="description" control={control} rules={{ required: 'Заполните поле' }} />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Stack direction="column" gap="16px">
                {fields &&
                  fields.map((field, index) => (
                    <FormControl className="add-supervisor-modal__row" key={field.id}>
                      <FormLabel required>Ингредиент {index + 1}</FormLabel>
                      <Stack direction="row" alignItems="center" spacing="1.2rem">
                        <FormInput
                          name="ingredients"
                          control={control}
                          isArrayField
                          position={index}
                          nameKey="ingredients"
                          rules={{
                            required: 'Required field',
                          }}
                        />
                        {index > 0 && (
                          <div className="add-phone__delete" onClick={() => remove(index)}>
                            <CloseIcon />
                          </div>
                        )}
                      </Stack>
                    </FormControl>
                  ))}
                <Stack
                  direction="row"
                  alignItems="center"
                  gap="8px"
                  onClick={() => append({ value: '' })}
                  className="create-recipe__add-ingredient"
                >
                  <AddIcon className="add-phone__icon" />
                  <Typography variant="text-sm">Сохранить</Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack direction="row" justifyContent="flex-end">
                <UIButton type="submit" loading={loading}>
                  Сохранить рецепт
                </UIButton>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </section>
    </Layout>
  );
};
