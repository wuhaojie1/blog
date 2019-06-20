import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogposts:
        {
          img1: require('./../public/images/masonary-post/post-1.jpg'),
          img2: require('./../public/images/masonary-post/post-2.jpg'),
          img3: require('./../public/images/masonary-post/post-3.jpg'),
          img4: require('./../public/images/masonary-post/post-4.jpg'),
          img5: require('./../public/images/masonary-post/post-5.jpg'),
          img6: require('./../public/images/masonary-post/post-6.jpg'),
          img7: require('./../public/images/masonary-post/post-7.jpg'),
          img8: require('./../public/images/masonary-post/post-8.jpg'),
          img9: require('./../public/images/masonary-post/post-9.jpg'),
          img10: require('./../public/images/masonary-post/post-10.jpg'),
          img11: require('./../public/images/masonary-post/post-11.jpg'),
          img12: require('./../public/images/masonary-post/post-12.jpg'),
          img13: require('./../public/images/masonary-post/post-13.jpg'),
          travel: 'TRAVEL',
          text1: 'Charming Evening Field',
          text2: '越南三明治',
          text3: '墨西哥塔扣盒',
          text4: '牛肚三明治',
          text5: '青木瓜沙拉',
          text6: '咖喱香肠',
          text7: '亚洲风味小吃',
          text8: '贝尔普里Bhel Puri',
          text9: '炸薯条',
          text10: '玉米饼(Arepas)',
          text11: 'Jerk烧烤酱烤制的鸡肉(Jerk Chicken) 和猪肉(Jerk Pork )',
          text12: '鱼子酱比萨',
          text13: '蒙大纳肉排',
          brief1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
          brief2:'松脆的面包内夹有热乎乎的烤猪肉，黄瓜，切碎的腌萝卜(甜的)和香菜，再涂上一些越南蛋黄酱和辣酱，美食便出炉了。',
          brief3:'对于游客来说，塔扣盒 * 大的方便就是可以边走边吃。小贩们通常在晚饭后支摊。他们切下一块熟猪肉，把它夹入双层玉米饼中，然后涂上又酸又辣又咸的墨西哥菠萝沾酱，爽口的塔扣盒就做成了。',
          brief4:'这是游客到佛罗伦萨必吃的美食。首先加入大蒜和调味剂把牛肚煮到烂熟，然后再加上一点红色辣椒酱，或是用酸豆、荷兰芹和凤尾鱼做成的辣椒酱汁， * 后把加过调料的牛肚夹入硬面包内食用即可。',
          brief5:'泰式青木瓜沙拉(som tam)融合了酸甜咸辣四种味道，用未熟的木瓜、花生、干虾混合鱼露、糖和柠檬汁，一并捣碎装入一塑料包内食用。',
          brief6:'将美味多汁的特制香肠切成块，浇上番茄酱，再撒上咖喱粉和辣椒粉即成，它的味道可绝不同于纽约热狗。',
          brief7:'美食包括印度咖喱鱼头(Indian-style fish head curry)，海南鸡饭(Hainanese chicken rice)，新加坡辣蟹(chile crabs)，和罗惹(Rojak)等。',
          brief8:'由米通粒、细长的炒面、扁豆碎粉、红薯、洋葱、莞茜、花生、香菜加少许罗望子酸甜酱和辣椒调制而成的一种印度小吃。',
          brief9:' 单独食用，不配汉堡; Bintje土豆切成条，在干净的花生油或是牛油里炸两次。炸出的薯条松脆不油腻，不管配不配蛋黄酱、调味酱或番茄酱等酱料，都美味无比。',
          brief10:'扁平煎饼形状，饼心精致可口，内有乳酪或鸡蛋。带有棕色的松脆外壳。',
          brief11:'于17世纪由逃亡奴隶发明。他们在与英国人争取自由的过程中，为了保存熊肉口粮，把肉和调味料混合在一起。如今的调料包括胡椒粉、肉豆蔻、麝香和苏格兰辣酱等。',
          brief12:'位于纽约曼哈顿的Ninos Bellissima餐馆推出的鱼子酱比萨已经成为富豪的最爱：比萨上铺着龙虾尾肉及4种价值750美元的鱼子酱。据计算，顾客每咬一口，就大约吃掉33美元(约225元人民币)。',
          brief13:'在蒙大纳，人和家畜的数量之比是1：12，故而你在Big Sky Country能找到最好的肉排是一件意料之中的事。纯天然饲养的Angus牛肉就是我们要找的东西，嘿，如果你不喜欢它，那你真是错过了一个好东西。菜谱上不仅吹嘘牛排的大小，而且还着重强调了它作为红肉的特点——越“血腥”越好。如果你喜欢吃七分熟的牛排，他们可能会告诉你“我们这儿不这样做”，千真万确！',
          btn: 'read more',

        }
  },
  mutations: {
  },
  actions: {

  }
})
