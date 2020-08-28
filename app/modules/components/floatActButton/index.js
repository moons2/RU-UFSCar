import React, {useState, useEffect} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  ToastAndroid,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import {Txt} from '~/modules/styles/index';
import api from '~/modules/services/api/index';
import security_access from '~/modules/tokens/index';
import AsyncStorage from '@react-native-community/async-storage';
import Lottie from 'lottie-react-native';
import Animation from '~/modules/images/loadinganimation.json';

export default function FloatButton() {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [votes, setVotes] = useState({
    happy: 0,
    sad: 0,
    neutral: 0,
  });
  const [votou_hoje, setVotou] = useState(false);
  const [votado, setVotado] = useState('like');
  const [is_loading, setLoading] = useState(false);

  const images = {
    like: {
      src: require('~/modules/images/like.png'),
      h: 30,
      w: 37,
    },
    neutral: {
      src: require('~/modules/images/liked.png'),
      h: 30,
      w: 37,
    },
    sad: {
      src: require('~/modules/images/angry.png'),
      h: 35,
      w: 35,
    },
    happy: {
      src: require('~/modules/images/heart.png'),
      h: 30,
      w: 37,
    },
  };

  useEffect(() => {
    const effect = async () => {
      fetchFeedback();
      const cardapio = await AsyncStorage.getItem('@CARDAPIO');
      if (cardapio) {
        const async_res = await AsyncStorage.multiGet([
          '@VOTOU',
          '@LAST_DAY',
          '@VOTADO',
        ]);
        const last_vote = Number(async_res[0][1]); // valor de @VOTOU
        const last_menu = Number(JSON.parse(async_res[1][1])); // valor @LAST_DAY
        if (last_vote === last_menu) {
          setVotado(JSON.parse(async_res[2][1]) || 'like');
          setVotou(true);
        } else {
          setVotado('like');
          setVotou(false);
        }
      } else {
        setVotado('like');
      }
    };
    effect();
  }, []);

  const fetchFeedback = async () => {
    try {
      const resp = await api.post('/gfeedback', null, {
        headers: {
          authorization: 'Bearer ' + security_access.jwt_access_token,
        },
      });

      const resp_data = await resp.data;
      setVotes(resp_data);
    } catch (err) {
      ToastAndroid.showWithGravity(
        err.message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  };

  const setFeedback = async fb => {
    if (votou_hoje) {
      ToastAndroid.showWithGravity(
        'Só pode votar em um por dia!\nVote amanhã rsrs',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      return;
    }
    try {
      setLoading(true);
      const fbsent = await api.post('/sfeedback', null, {
        headers: {
          authorization: 'Bearer ' + security_access.jwt_access_token,
          res_usr: fb,
        },
      });

      const newfb = votes[fb];
      if (fbsent.status === 201) {
        setVotes({
          ...votes,
          [fb]: newfb + 1,
        });
        setVotou(true);
        setVotado(fb);

        const today = new Date().getDate();
        await AsyncStorage.setItem('@VOTADO', JSON.stringify(fb));
        await AsyncStorage.setItem('@VOTOU', JSON.stringify(today));
      } // coloco um esle informando que teve erro ao votar ?
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const toggleOpen = () => {
    const toValue = animation._open ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();

    animation._open = !animation._open;
  };

  const bgStyle = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 30],
        }),
      },
    ],
  };

  const reloadStyle = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70],
        }),
      },
    ],
  };

  const orderStyle = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140],
        }),
      },
    ],
  };

  const lastStyle = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -210],
        }),
      },
    ],
  };

  return (
    <View style={innerstyles.container}>
      {/* <TouchableWithoutFeedback onPress={() => toggleOpen()}>
        <Animated.View style={[innerstyles.background, bgStyle]} />
      </TouchableWithoutFeedback> */}

      <TouchableWithoutFeedback onPress={() => setFeedback('sad')}>
        <Animated.View style={[innerstyles.button, innerstyles.sad, lastStyle]}>
          <Image
            source={require('~/modules/images/angry.png')}
            style={{height: 30, width: 30}}
          />
          <Txt style={innerstyles.txtVotes}>{votes.sad || 0}</Txt>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => setFeedback('neutral')}>
        <Animated.View
          style={[innerstyles.button, innerstyles.neutral, orderStyle]}>
          <Image
            source={require('~/modules/images/liked.png')}
            style={{height: 30, width: 35}}
          />
          <Txt style={innerstyles.txtVotes}>{votes.neutral || 0}</Txt>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => setFeedback('happy')}>
        <Animated.View
          style={[innerstyles.button, innerstyles.happy, reloadStyle]}>
          <Image
            source={require('~/modules/images/heart.png')}
            style={{height: 30, width: 36.67}}
          />
          <Txt style={innerstyles.txtVotes}>{votes.happy || 0}</Txt>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => toggleOpen()}>
        <View style={innerstyles.button}>
          {is_loading ? (
            <Lottie
              resizeMode="contain"
              source={Animation}
              autoPlay
              loop={true}
            />
          ) : (
            <>
              <Image
                source={images[votado].src}
                style={{height: images[votado].h, width: images[votado].w}}
              />
              <Txt>{votes.sad + votes.happy + votes.neutral || 0}</Txt>
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
const innerstyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: 'rgba(255,255,255,.1)',
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 20,
    right: 20,
    borderRadius: 30,
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowOffset: {x: 2, y: 0},
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  payText: {
    fontFamily: 'Roboto',
    color: '#000',
    fontSize: 14,
  },
  txtVotes: {
    fontSize: 12,
    marginTop: 0,
  },
});
