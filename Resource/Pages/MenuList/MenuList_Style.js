import {StyleSheet} from 'react-native';

import {heightToDp, widthToDp} from '../../Utils/Responsive';

const Styles = StyleSheet.create({
  conrainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  MainView: {
    height: heightToDp('33'),
  },
  TopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightToDp('4'),
  },
  FlexView: {
    flexDirection: 'row',
  },
  SearchBar: {
    width: widthToDp('78'),
    marginEnd: widthToDp('2'),
    height: heightToDp('5.5'),
    borderRadius: widthToDp('10'),
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 5,
    marginStart: widthToDp('7'),
  },
  SearchIcon: {
    justifyContent: 'center',
    marginStart: widthToDp('2'),
  },
  TextInputView: {
    width: widthToDp('75'),
  },
  TextInput: {
    color: '#000',
  },
  MenuView: {
    borderWidth: 1,
    width: widthToDp('11'),
    backgroundColor: '#fff',
    borderRadius: widthToDp('15'),
    height: heightToDp('5.5'),
    justifyContent: 'center',
  },
  Menu: {
    alignItems: 'center',
  },
  BanerMainView: {
    alignItems: 'center',
    marginTop: heightToDp('2'),
  },
  BanerView: {
    width: widthToDp('90'),
    height: heightToDp('18'),
    backgroundColor: '#fff',
    borderRadius: widthToDp('3'),
    elevation: 6,
  },
  BanerImage: {
    height: heightToDp('18'),
    width: widthToDp('90'),
  },
  RecomandedMain: {
    flexDirection: 'row',
    height: heightToDp('7'),
    justifyContent: 'space-between',
  },
  RecomandedView: {
    justifyContent: 'center',
    marginStart: widthToDp('5'),
  },
  RecomandedText: {
    color: '#000',
    fontSize: widthToDp('4.5'),
    fontWeight: 'bold',
  },
  RecomandedListView: {
    flexDirection: 'row',
  },
  bottombtn: {
    backgroundColor: 'rgb(255,60,90)',
    height:heightToDp('8'),
    width:widthToDp('90'),
    alignSelf: 'center',
    borderRadius:widthToDp('2'),
    bottom:heightToDp('1.5'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:widthToDp('2'),
  },
  horizontal: {
    flexDirection: 'row',
    alignItems:'center',
    marginStart:widthToDp('2'),
    marginTop:heightToDp('0.8'),
    marginEnd:widthToDp('2')
  },
});

export default Styles;
