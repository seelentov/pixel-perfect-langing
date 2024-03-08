
interface ICategoryPage {
  params: { service: string }
}


export default async function Service({ params }: ICategoryPage) {
  return (
    <p>{params.service}</p>
  );
}
