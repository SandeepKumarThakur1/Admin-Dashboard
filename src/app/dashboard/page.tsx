import DashboardLayout from "@/components/layout/DashboardLayout";

const cardData = [
  {
    text: "Total Users",
    num: 1250,
    cardDataClass:'cardBg1'
  },
  {
    text: "New Orders",
    num: '320',
    cardDataClass:'cardBg2'
  },
  {
    text: "Revenue",
    num: '$25,500',
    cardDataClass:'cardBg3'
  },
  {
    text: "Feedback",
    num: '85%',
    cardDataClass:'cardBg4'
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="pb-5">
        <h1 className="text-3xl font-bold">Hi, Admin User</h1>
        <h3>Welcome back to Dashbord</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((items, index) => (
            <div className={`card ${items.cardDataClass}`} key={index}>
              <p className="text-[16px] pb-2 font-semibold text-dark dark:text-[var(--dark)]">
                {items.text}
              </p>
              <p className="text-2xl font-bold text-dark mb-0 dark:text-[var(--dark)]">
                {items.num}
              </p>
            </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
