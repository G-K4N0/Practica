import getAllLabs from '../../../services/usarLab.js'
export function Labs () {
  const { data } = getAllLabs()

  return (
  <div>
    <h1>{data}</h1>
  </div>)
}
