const SideBar = () => {
    return(
        <>
        <div className="fixed top-0 left-0 h-screen w-16
        flex flex-col bg-primary text-white shadow-lg">
            <i>A</i>
            <i>A</i>
            <i>A</i>
            <i>A</i>
            <i>A</i>
        </div>
        </>
    )
};

const SideBarIcon = ({icon}) => (
    <div className="sidebar-icon">
        {icon}
    </div>
)

export default SideBar;