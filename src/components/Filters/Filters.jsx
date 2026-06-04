import "./Filters.css"

export default function Filters({
  value,
  onChange,
  options = []
}) {

  return (

    <div className="filters">

      {options.map(option => (

        <button
          key={option.value}
          className={
            value === option.value
              ? "active"
              : ""
          }
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>

      ))}

    </div>

  )
}