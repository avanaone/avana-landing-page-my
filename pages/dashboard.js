import Feature from '../components/Feature';

import ContainerAnalytic from '../components/AnalyticContainer';

const Dashboard = () => (
  <ContainerAnalytic>
    <Feature
      id='dashboard'
      title='Dashboard'
      className='flex-d-row-reverse'
      isAnchor
    />
  </ContainerAnalytic>
);

export default Dashboard;
