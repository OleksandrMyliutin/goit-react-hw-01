import s from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
    return (
        <table className={s.tableStyle}>
            <thead className={s.headerTable}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
            </thead>
            <tbody className={s.bodyTable}>
            {items.map((item, idx) => (
                <tr className={s.row} key={idx}>
                    <td className={s.text}>{item.type}</td>
                    <td className={s.text}>{item.amount}</td>
                    <td className={s.text}>{item.currency}</td>
                </tr>
            ))}
            </tbody>            
        </table>
        
    );
}
export default TransactionHistory;