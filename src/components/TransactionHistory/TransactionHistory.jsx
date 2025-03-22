import s from './TransactionHistory.module.css';

const TransactionHistory = ({ type, amount, currency }) => {
    return (
        <tr className={s.row}>
            <td className={s.text}>{type}</td>
            <td className={s.text}>{amount}</td>
            <td className={s.text}>{currency}</td>
        </tr>
    );
}

export default TransactionHistory;