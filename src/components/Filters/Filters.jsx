import "./Filters.css"

export default function Filters({
  value,
  onChange,
  options = []
}) {

  return (
    <>

      {/* DESKTOP */}

      <div className="filters desktop-filters">

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

      {/* MOBILE */}

      <div className="mobile-filters">

        <select
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
        >

          {options.map(option => (

            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>

          ))}

        </select>

      </div>

    </>
  )
}