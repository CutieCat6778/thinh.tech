export function ResolveImage(url: string, width: number, height: number) {
  const encodedUrl = encodeURIComponent("https://cdn.thinh.tech/v4/" + url);
  return `https://imagecdn.app/v2/image/${encodedUrl}?width=${width}&height=${height}&format=webp`
}
