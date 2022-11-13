import logo from './logo.svg';
import './App.css';
import {useGetAllPostQuery} from './services/post'

function App() {
  const responce = useGetAllPostQuery()
  console.log("res",responce.data);
  if(responce.isLoading) return <div>Loading......</div>
  if(responce.error) return <h1>an error with api</h1>
  return (
    <div className="App">
   <h1>
   <table>
                <tr>
                    <th>Company</th>
                    <th>title</th>
                   
                </tr>
                {
                    responce.data?.map((ele, index) => {
                        return (
                            <>
                            <tbody>

                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    {/* <td>Germany</td> */}
                                </tr>
                            </tbody>

                            </>
                        )
                    })
                }
            </table>
   </h1>
    </div>
  );
}

export default App;
