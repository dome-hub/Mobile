import { View, Text, StyleSheet, ScrollView , Image} from 'react-native';

const App = () => {

  const medalData = [
    { rank: 1, country: ' Thailand', gold: 233, silver: 154, bronze: 112,total:499, img :'https://img.freepik.com/free-vector/illustration-thailand-flag_53876-27145.jpg?semt=ais_hybrid&w=740&q=80' },
    { rank: 2, country: ' Indonesia', gold: 91, silver: 111, bronze: 131,total:333 ,img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG52QdAD8gCXjQSqT_oLNiXhuz0zCWIXXeZg&s' },
    { rank: 3, country: ' Vietnam', gold: 87, silver: 81, bronze: 110,total:278, img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xtv0Y1vQS7vjWO2pkeXAsrg8rtI3ErrVyw&s'},
    { rank: 4, country: ' Malaysia', gold: 57, silver: 57, bronze: 117,total:231, img :'https://e7.pngegg.com/pngimages/416/106/png-clipart-flag-of-malaysia-flag-of-the-united-states-national-flag-flag-miscellaneous-flag.png'},
    { rank: 5, country: ' Singapore', gold: 52, silver: 61, bronze: 89,total:202,img :'https://static.vecteezy.com/system/resources/previews/004/712/238/non_2x/singapore-square-national-flag-free-vector.jpg' },
    { rank: 6, country: ' Philippine', gold: 50, silver: 73, bronze: 154,total:277,img :'https://vectorflags.s3.amazonaws.com/flags/ph-square-01.png' },
    { rank: 7, country: ' Myanmar', gold: 3, silver: 21, bronze: 49,total:73,img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1Kk66VDtx5-S5dyNUC1nM4h-JNnmgeRNgw&s' },
    { rank: 8, country: ' Laos', gold: 2, silver: 9, bronze: 28,total:39,img :'https://cdn.countryflags.com/thumbs/laos/flag-square-250.png' },
    { rank: 9, country: ' Brunei', gold: 1, silver: 3, bronze: 5,total:9,img :'https://cdn.countryflags.com/thumbs/brunei/flag-square-250.png' },
    { rank: 10, country: ' Timor-leste', gold: 0, silver: 1, bronze: 7,total:8,img :'https://cdn.countryflags.com/thumbs/east-timor/flag-square-250.png' },
    { rank: 11, country: ' Cambodia', gold: 52, silver: 61, bronze: 89,total:202,img :'https://static.vecteezy.com/system/resources/previews/059/016/690/non_2x/cambodia-flag-square-design-free-vector.jpg' },
  ];

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <View style = {styles.row}>
        <Text style={styles.title}>MEDAL STANDINGS</Text>
        <Image 
        source = {require('./Seagamepn.png')}
        style={styles.headerImage}/>
      </View>
      
      <View style = {styles.row}>
        <Text style={styles.update}>Update : 4.00 PM</Text>
        <Image 
        source = {require('./311035.jpg')}
        style={styles.headerImage1}/>
      </View>

      {/* HEADER */}
      <View style={styles.headerRow}>
        <Text style={styles.colRank}>Rank</Text>
        <Text style={styles.colCountryHeader}>Country</Text>
        <Text style={styles.colMedal}>🥇</Text>
        <Text style={styles.colMedal}>🥈</Text>
        <Text style={styles.colMedal}>🥉</Text>
        <Text style={styles.colTotal}>TOTAL</Text>
      </View>

      {/* BODY */}
      <ScrollView>
  {medalData.map((item) => (
    <View key={item.rank} style={styles.LineRow}>

      <Text style={styles.colRank}>{item.rank}</Text>

      <View style={styles.colCountry}>
        <Image source={{ uri: item.img }} style={styles.flag} />
        <Text style={styles.countryText}>{item.country}</Text>
      </View>

      {item.country.trim() === 'Cambodia' ? (
        <Text style={styles.withdrew}>WITHDREW</Text>
      ) : (
        <>
          <Text style={styles.colMedalGold}>{item.gold}</Text>
          <Text style={styles.colMedalSilver}>{item.silver}</Text>
          <Text style={styles.colMedalBronze}>{item.bronze}</Text>
          <Text style={styles.colTotal}>{item.total}</Text>
        </>
      )}

    </View>
  ))}
</ScrollView>
      <View style={styles.LineRow}>
        <Text style={styles.totalLabel}></Text>
          <View style= {styles.bgGold}>
            <Text style={styles.totalText}>576</Text>
          </View>
          <View style={styles.bgSilver}>
            <Text style={styles.totalText}>571</Text>
          </View>
          <View style={styles.bgBronze}>
            <Text style={styles.totalText}>802</Text>
          </View>
          <View style={styles.bgBlack}>
            <Text style={styles.grandTotalText}>1,949</Text>
          </View>
        </View>
        
        <View style={styles.row}>
          <Image 
          source = {{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIPxDNh3HLNqSRlFBxoBm9ZKULji_kCZJdg&s'}}
          style = {styles.ImgSupport}
          />        
          <Image 
          source = {{uri : 'https://e7.pngegg.com/pngimages/365/69/png-clipart-charoen-pokphand-foods-charoen-pokphand-group-company-thai-cuisine-cp-company-logo-food-company.png'}}
          style = {styles.ImgSupport}
          />   
          <Image 
          source = {{uri : 'https://e7.pngegg.com/pngimages/384/376/png-clipart-7-eleven-logo-7-eleven-logo-dallas-fizzy-drinks-convenience-shop-seven-miscellaneous-company.png'}}
          style = {styles.ImgSupport}
          />    
          <Image 
          source = {{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6xa3S2xp8nB_5A9dWcj2ZBtkGGoQHWmDEA&s'}}
          style = {styles.Imgtrue}
          />    
          <Image 
          source = {{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXf1LshqyHP7Nr8HP900qHJ-XBps0lV1ZuWQ&s'}}
          style = {styles.ImgSupport}
          />    
          <Image 
          source = {{uri : 'https://wiredscore.com/wp-content/uploads/2025/01/Central-Pattana-1.png'}}
          style = {styles.ImgSupport}
          />    
          <Image 
          source = {{uri : 'https://daikinpng.com.pg/wp-content/uploads/2025/02/Daikin-Logo.png'}}
          style = {styles.ImgSupport}
          />    
          <Image 
          source = {{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgNvJBHBIlmJBHQZP-nu0xkoOTuo6DmODqA&s'}}
          style = {styles.ImgSupport}
          />    
          <Image 
          source = {{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQT_Dyh40TZUX8jAmuw8rhrs50YB7fh8qcw&s'}}
          style = {styles.ImgSupport}
          />   
          <Image 
          source = {{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1k4FE0j63XwThWGzJMoa4BwFQ4Uosn7XDFw&s'}}
          style = {styles.ImgSupport}
          />     

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    //flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  update: {
    color: 'gray',
    marginBottom: 10,
  },

  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    paddingBottom: 6,
    alignItems: 'center',
  },
  LineRow :{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: '#4a64ff',
  },
  row : {
    flexDirection : 'row' 
  },

  withdrew: {
  flex: 1,              
  //textAlign: 'center',
  fontWeight: 'bold',
  color: '#333',
  
},
  colRank: {
    width: 40,
    textAlign: 'center',
    fontWeight:'bold'
  },

  colCountryHeader: {
    flex: 1,
    fontWeight: 'bold',
  },

  colCountry: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  countryText: {
    marginLeft: 6,
    flexShrink: 1,
  },

  colMedal: {
    width: 60,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  colMedalGold: {
    width: 60,
    textAlign: 'center',
    color: '#d4af37',
    fontWeight: 'bold',
  },

  colMedalSilver: {
    width: 60,
    textAlign: 'center',
    color: '#999',
  },

  colMedalBronze: {
    width: 60,
    textAlign: 'center',
    color: '#cd7f32',
  },

  colTotal: {
    width: 60,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  flag: {
    width: 30,
    height: 20,
    resizeMode: 'cover',
  },
  headerImage: {
  width: 40,    
  height: 40,        
  //resizeMode: 'cover',
  marginLeft: 110,
},
  headerImage1 :{
  width: 30,    
  height: 40,        
  //resizeMode: 'cover',
  marginLeft: 245,
  },

  //Tett
    totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 2,
    borderColor: '#4a64ff',
  },

  totalLabel: {
    width: 160,
  },
  bgGold: {
    width: 60,
    backgroundColor: '#f2c94c',
    alignItems: 'center',
    paddingVertical: 6,
  },
    totalSpacer: {
    width: 160,
  },
  bgSilver: {
    width: 60,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    paddingVertical: 6,
  },

  bgBronze: {
    width: 60,
    backgroundColor: '#f2994a',
    alignItems: 'center',
    paddingVertical: 6,
  },

  bgBlack: {
    width: 60,
    backgroundColor: '#1f2937',
    alignItems: 'center',
    paddingVertical: 6,
  },

  totalText: {
    fontWeight: 'bold',
    color: '#000',
  },
  grandTotalText :{
    fontWeight: 'bold',
    color: '#ffffffff',
  },

  ImgSupport : {
    width: 40,    
    height: 40,      
  },
  Imgtrue : {
    width: 60,    
    height: 40,     
  }


});
export default App
