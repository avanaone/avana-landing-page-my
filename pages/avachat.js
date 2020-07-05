import Feature from '../components/Feature';

import ContainerAnalytic from '../components/AnalyticContainer';

const Avachat = () => (
  <ContainerAnalytic>
    <Feature
      id='avachat'
      title='AVAChat'
      link={[
        'https://api.whatsapp.com/send?phone=60124037044&text=Hi+AVANA+I+wanna+know+more+about+AVAChat+feature',
        'https://api.whatsapp.com/send?phone=60124037044&text=Hai+AVANA+saya+berminat+nak+tau+lebih+lanjut+mengenai+AVAChat',
      ]}
      CS
    />
  </ContainerAnalytic>
);

export default Avachat;
