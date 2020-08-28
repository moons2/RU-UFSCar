import React, {useEffect} from 'react';
import {Container, Txt} from '~/modules/styles/index';
import analytics from '@react-native-firebase/analytics';

export default function Feed() {
  async function trackPinedCard(screen) {
    await analytics().logEvent(screen);
  }

  useEffect(() => {
    trackPinedCard('feed_pinedCardMsg');
  }, []);

  return (
    <Container style={{justifyContent: 'center', alignItems: 'center'}}>
      <Txt style={{opacity: 0.8, fontSize: 20, marginTop: -50}}>¯\_(ツ)_/¯</Txt>
    </Container>
  );
}
