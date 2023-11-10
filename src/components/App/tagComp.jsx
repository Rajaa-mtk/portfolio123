
const TagComponent = ({title}) => {
  return (
    <div className='animate-bounce text-[#c4c1e0] absolute top-4 left-2'>
      {`<${title} />`}
    </div>
  )
}

export default TagComponent