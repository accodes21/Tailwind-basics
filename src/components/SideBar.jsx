import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPython } from 'react-icons/fa';

const SideBar = () => {
    return(
        <>
        <div className="fixed top-0 left-0 h-screen w-16
        flex flex-col bg-primary text-white shadow-lg">
            <SideBarIcon icon={<FaFire size="28" />} />
            <Divider/>
            <SideBarIcon icon={<BsPlus size="32" />} />
            <SideBarIcon icon={<FaPython size="28" />} />
            <SideBarIcon icon={<BsFillLightningFill size="20" />} />
            <Divider/>
            <SideBarIcon icon={<BsGearFill size="22" />} />

        </div>
        </>
    )
};

const SideBarIcon = ({icon, text = 'tooltip💡'}) => (
    <div className="sidebar-icon group">
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)

const Divider = () => <hr className="sidebar-hr" />;


export default SideBar;