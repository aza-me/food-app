export const convertToBase64 = (file: any, withoutPrefix?: boolean): Promise<string> =>
  new Promise((resolve, reject) => {
    if (!file) reject();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve(withoutPrefix ? String(reader.result).split('base64,')[1] : (reader.result as string));
    reader.onerror = (error) => reject(error);
  });
