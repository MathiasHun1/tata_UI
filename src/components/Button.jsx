function Button({active, setActive, text}) {
    let isActive = active === text

  return (
    <button 
    className={`btn text-black text-xl w-32 bg-sky-400 rounded-none border-0 hover:bg-sky-900 hover:text-zinc-100 
    ${isActive ? 'bg-sky-900 text-zinc-100' : ''}`}
    onClick={() => {
      setActive(text) 
    }}
    >
      {text}
    </button>
  )
}

export default Button