import { ReactComponent as UPILogo } from '../../assets/icons/upi.svg'
import { ReactComponent as PaytmLogo } from '../../assets/icons/paytm.svg'
import { ReactComponent as  VisaLogo } from '../../assets/icons/visa.svg'
import { ReactComponent as MasterCardLogo } from '../../assets/icons/mastercard.svg'
import { ReactComponent as AmexLogo } from '../../assets/icons/amex.svg'
import { ReactComponent as DinerClubLogo } from '../../assets/icons/diners-club.svg'

export const paymentTypes = [
    {
        icon: UPILogo,
    },
    {
        icon: PaytmLogo,
    },
    {
        icon: VisaLogo,
    },
    {
        icon: MasterCardLogo,
    },
    {
        icon: AmexLogo,
    },
    {
        icon: DinerClubLogo,
    },
]

export const paymentPlans = [{
    plan: 'Mini',
    price: 'From ₹7/day',
    accountNumber: 1,
    features: ['Ad-free music listening on mobile',
    'Group Session',
    'Download 30 songs on 1 mobile device']
},
{
    time: 1,
    plan: 'Individual',
    price: '₹119',
    accountNumber: 1,
    features: ['Ad-free music listening',
    'Group Session',
    'Download 10k songs/device on 5 devices']
},
{
    time: 1,
    plan: 'Duo',
    price: '₹149',
    accountNumber: 2,
    features: ['For couples who live together',
    'Ad-free music listening',
    'Group Session',
    'Download 10k songs/device, on 5 devices per account']
},
{
    time: 1,
    plan: 'Family',
    price: '₹179',
    accountNumber: 1,
    features: ['For family who live together',
    'Block explicit music',
    'Ad-free music listening',
    'Group Session',
    'Download 10k songs/device on 5 devices']
}]