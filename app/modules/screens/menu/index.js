import React, {useState, useEffect} from 'react';
import {View, FlatList, Image, ToastAndroid} from 'react-native';

import styles, {
  Container,
  Txt,
  MenuComponent,
  TxtTitle,
  TxtSubtitle,
  Meal,
  TxtData,
} from '~/modules/styles/index';
import api from '~/modules/services/api/index';
import AsyncStorage from '@react-native-community/async-storage';
import FloatButton from '~/modules/components/floatActButton/index';
import Offline from '~/modules/components/offComponent/index';
import security_access from '~/modules/tokens/index';
import cio from 'cheerio-without-node-native';

import analytics from '@react-native-firebase/analytics';

const Menu = () => {
  const [items, setItem] = useState([]);
  const [is_off, setOff] = useState(false);
  const [is_refreshing, setRefresh] = useState(false);

  /**
   * 1º param: função
   * 2º param: sob q circunstancias essa fn sera executada
   */
  useEffect(() => {
    trackScreen('menu_main_screen');

    const build = async () => {
      const today = new Date().getDate();
      const today_script = await AsyncStorage.getItem('@LAST_DAY');
      if (Number(JSON.parse(today_script)) === Number(today)) {
        const cardapio = await AsyncStorage.getItem('@CARDAPIO');
        setItem([...JSON.parse(cardapio)]);
        setOff(false);
        setRefresh(false);
      } else {
        fetchCardapio();
      }
    };

    build();
  }, []);

  /**
   *
   */
  const fetchCardapio = async () => {
    try {
      setRefresh(true);

      const scriptAscync =
        (await AsyncStorage.getItem('@SCRIPT')) || (await loadScript());
      const script = JSON.parse(scriptAscync);

      // em seguida o cheerio carrega do site da ufscar o script
      const ru_url =
        'https://www2.ufscar.br/restaurantes-universitario/cardapio';
      const ru_res = await fetch(ru_url);
      const html_string = await ru_res.text();
      const $ = cio.load(html_string);

      let menu = [];

      $(script.elemento_cardapio)
        .slice(0, 2)
        .map((_, div) =>
          menu.push({
            data: $(script.data, div).text(),
            titulo: $(script.titulo, div).text(),
            prato: $(script.prato, div).text(),
            guarnicao: $(script.guarnicao, div).text(),
            arroz: $(script.arroz, div).text(),
            feijao: $(script.feijao, div).text(),
            saladas: $(script.saladas, div).text(),
            sobremesa: $(script.sobremesa, div).text(),
          }),
        );

      setItem([...menu]);

      await AsyncStorage.setItem(
        '@LAST_DAY',
        JSON.stringify(menu[0].data.split('/')[0]),
      );
      await AsyncStorage.setItem('@CARDAPIO', JSON.stringify(menu));

      setOff(false);
      setRefresh(false);
    } catch (err) {
      setOff(true);
      console.log(err);
      ToastAndroid.showWithGravity(
        err.message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  };

  /**
   *
   */
  const trackScreen = async screen => {
    await analytics().logEvent(screen);
  };

  /**
   *
   */
  const loadScript = async () => {
    const get_script = await api.get('/gscript');
    const script = await get_script.data;
    await AsyncStorage.setItem('@SCRIPT', JSON.stringify(script));
    return JSON.stringify(script);
  };

  /**
   *
   */
  const handlerRefresh = async () => {
    setRefresh(true);
    await fetchCardapio();
    ToastAndroid.showWithGravity(
      'Cardápio atualizado!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  /**
   *
   */
  const renderItem = ({item}) => {
    return (
      <Meal>
        <View style={styles.viewMenuData}>
          <TxtData>
            {item.titulo[0].toUpperCase() + item.titulo.slice(1).toLowerCase()}{' '}
            • {item.data}
          </TxtData>
        </View>

        <MenuComponent>
          <Image
            source={require('~/modules/images/meat_color.png')}
            style={styles.foodIcon}
          />
          <View style={styles.subComponent}>
            <TxtTitle>Prato princípal</TxtTitle>
            <TxtSubtitle>
              {item.prato === 'Não Definido.'
                ? '#Descubra'
                : item.prato.includes('/ ')
                ? item.prato.replace('/ ', '\n')
                : item.prato.replace('/', '\n')}
            </TxtSubtitle>
          </View>
        </MenuComponent>

        <MenuComponent>
          <Image
            source={require('~/modules/images/soup.png')}
            style={styles.foodIcon}
          />
          <View style={styles.subComponent}>
            <TxtTitle>Guarnição</TxtTitle>
            <TxtSubtitle>
              {item.guarnicao === 'Não Definido.'
                ? '#Descubra'
                : item.guarnicao}
            </TxtSubtitle>
          </View>
        </MenuComponent>

        <MenuComponent>
          <Image
            source={require('~/modules/images/rice.png')}
            style={styles.foodIcon}
          />
          <View style={styles.subComponent}>
            <TxtTitle>Arroz</TxtTitle>
            <TxtSubtitle>
              {item.arroz === 'Não Definido.' ? '#Descubra' : item.arroz}
            </TxtSubtitle>
          </View>
        </MenuComponent>

        <MenuComponent>
          <Image
            source={require('~/modules/images/coffee-beans.png')}
            style={styles.foodIcon}
          />
          <View style={styles.subComponent}>
            <TxtTitle>Feijão</TxtTitle>
            <TxtSubtitle>
              {item.feijao === 'Não Definido.' ? '#Descubra' : item.feijao}
            </TxtSubtitle>
          </View>
        </MenuComponent>

        <MenuComponent>
          <Image
            source={require('~/modules/images/salad_color.png')}
            style={styles.foodIcon}
          />
          <View style={styles.subComponent}>
            <TxtTitle>Saladas</TxtTitle>
            <TxtSubtitle>
              {item.saladas === 'Não Definido.' ? '#Descubra' : item.saladas}
            </TxtSubtitle>
          </View>
        </MenuComponent>

        <MenuComponent>
          <Image
            source={require('~/modules/images/cake.png')}
            style={styles.foodIcon}
          />
          <View style={styles.subComponent}>
            <TxtTitle>Sobremesa</TxtTitle>
            <TxtSubtitle>
              {item.sobremesa === 'Não Definido.'
                ? '#Descubra'
                : item.sobremesa}
            </TxtSubtitle>
          </View>
        </MenuComponent>
      </Meal>
    );
  };

  return (
    <Container>
      {is_off ? (
        <Offline handleRefresh={handlerRefresh} />
      ) : (
        <FlatList
          //showsHorizontalScrollIndicator={false}
          //horizontal={true}
          contentContainerStyle={styles.list}
          data={items}
          keyExtractor={item => item.titulo}
          renderItem={item => renderItem(item)}
          refreshing={is_refreshing}
          onRefresh={() => handlerRefresh()}
        />
      )}
      <FloatButton />
    </Container>
  );
};

export default Menu;
/*

          //<View style={styles.menuContainer}> 
          //  <Image source={require('../../images/no_internet.png')}/>
          //</View>

          <FlatList 
            //showsHorizontalScrollIndicator={false}
            //horizontal={true}
            contentContainerStyle={styles.list}
            data={this.state.items}
            keyExtractor={item=>item.titulo}
            renderItem={this.renderItem}
            refreshing={this.state.refreshing}
            onRefresh={this.handlerRefresh}
          />


*/
