
type Props = {
  image: string,
  description: string
}

const Options = ({ image, description }: Props) => {
  return (
    <div className="relative mx-5 inline-block h-14 w-14">
      <li className="">
        <img alt={`${image}`} src={image} />
        <div className="font-bold text-black text-center mx-auto text-wrap">{description}</div>
      </li>
    </div>
  )
}

export default Options