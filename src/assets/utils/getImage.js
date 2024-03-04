export default async function getImage(path) {
  console.log(path)
  const image = await import(`../${path}`)
  console.log(image)
  return image
}
