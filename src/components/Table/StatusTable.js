import statusIcon from '../../assets/icons/Ellipse 3.png';
import './style.status_table.css';

const data = [
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},
    {date: "10 Feb, 2022", id: "8KU70146GY", customer: "ShareTrip", status: "Draft", amount: "৳ 1,200.00"},


]

const statusTable = () => {
    return (
        <table className="table table-auto min-w-full text-left">
            <tr >
                <th>Create Date</th>
                <th>ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Amount</th>
            </tr>
          {
            data.map((val, key) => {
                return(
                    <tr key={key}>
                        <td>{val.date}</td>
                        <td>{val.id}</td>
                        <td>{val.customer}</td>
                        <td><img src={statusIcon} alt="scheduled icon" className="inline-block icon"/>{val.status}</td>
                        <td>{val.amount}</td>
                    </tr>
                )
            })
          }
        </table>
    );
}

export default statusTable;