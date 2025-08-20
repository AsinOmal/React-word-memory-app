
export default function ProgressBar() {

  const text = 'hello world' // TODO: Come and change this later.

  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="level">
      <div>
        <h4>{text}</h4>
      </div>

      {arr.map((element, elementIdx) => {  //element is the current item in the array, //elementIdx is the index of that item.
        return (
          <div className="level-bar" key={elementIdx}>{element}</div>
        )
      })}

      <div className="xp" style={{ width: `${40}%` }}></div>

    </div>
  )
}
