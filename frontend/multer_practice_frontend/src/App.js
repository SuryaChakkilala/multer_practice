import {useState} from 'react'

function App() {
  const [fileData, setFileData] = useState()
  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0])
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    const data = new FormData();

    data.append('image', fileData)

    fetch('http://localhost:3000/single', {
      method: 'POST',
      body: data
    }).then(result => {
      console.log('success on sending file')
      setFileData(null)
    }).catch(err => {
      console.log(err.message)
    })
  }
  return (
    <div className="App">
      <h1>React App File Uploading</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <button type="submit">Submit File to Backend</button>
      </form>
    </div>
  );
}

export default App;

