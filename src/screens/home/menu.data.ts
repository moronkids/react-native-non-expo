import SafeDeposit from '@/assets/img/chest.svg';
import SafeDepositDark from '@/assets/img/dark/chest.svg';
import DocumentDark from '@/assets/img/dark/document.svg';
import MoneyIconDark from '@/assets/img/dark/money.svg';
import OperationIconDark from '@/assets/img/dark/operation.svg';
import Document from '@/assets/img/document.svg';
import MoneyIcon from '@/assets/img/money.svg';
import OperationIcon from '@/assets/img/operation.svg';

const MenuData = [
    {
        title: 'CSSO',
        icon: OperationIcon,
        iconDark: OperationIconDark
    },
    {
        title: 'Teller',
        icon: MoneyIcon,
        iconDark: MoneyIconDark
    },
    {
        title: 'Teller Non Cash',
        icon: Document,
        iconDark: DocumentDark
    },
    {
        title: 'Safe Deposit Box',
        icon: SafeDeposit,
        iconDark: SafeDepositDark
    },
    // {
    //     title: 'Scan QR',
    //     icon: Scan,
    //     iconDark: Scan,
    // },
]

export default MenuData