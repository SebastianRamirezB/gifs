
import { Article, Image } from './styles';

export const Gif = ({gif}) => {

  const onCopy = async(e) => {
    await navigator.clipboard.writeText(gif.url)
          .then(() => console.log('Copiado'))
          .catch(() => console.log('No se pudo Copiar'));
  }


  return (

    <Article onClick={onCopy} >
        <Image src={gif.img} alt={gif.title} />
    </Article>
  )
}
