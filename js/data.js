var questions = [
  {
    "name": "Gerhard Gentzen",
    "occupation": "mathematician",
    "image": "images/gerhard_gentzen.jpg",
    "description": "Gerhard Karl Erich Gentzen (November 24, 1909 – August 4, 1945) was a German mathematician and logician. He made major contributions to the foundations of mathematics, proof theory, especially on natural deduction and sequent calculus. He died in 1945 after the Second World War, because he was deprived of food after being arrested in Prague."
  },
  {
    "name": "Andrew Wiles",
    "occupation": "mathematician",
    "image": "images/andrew_wiles.jpg",
    "description": "Sir Andrew John Wiles, KBE, FRS (born 11 April 1953) is a British mathematician and a Royal Society Research Professor at the University of Oxford, specialising in number theory. He is most notable for proving Fermat's Last Theorem."
  },
  {
    "name": "Henri Poincaré",
    "occupation": "mathematician",
    "image": "images/henri_poincare.jpg",
    "description": "Jules Henri Poincaré (29 April 1854 – 17 July 1912) was a French mathematician and theoretical physicist. Poincaré became the first person to discover a chaotic deterministic system which laid the foundations of modern chaos theory. He is also considered to be one of the founders of the field of topology."
  },
  {
    "name": "Alexander Grothendieck",
    "occupation": "mathematician",
    "image": "images/alexander_grothendieck.jpg",
    "description": "Alexander Grothendieck (28 March 1928 – 13 November 2014) was a German-born French mathematician who became the leading figure in the creation of modern algebraic geometry. His research extended the scope of the field and added elements of commutative algebra, homological algebra, sheaf theory and category theory to its foundations."
  },
  {
    "name": "Yutaka Taniyama",
    "occupation": "mathematician",
    "image": "images/yutaka_taniyama.jpg",
    "description": "Yutaka Taniyama (12 November 1927 – 17 November 1958) was a Japanese mathematician known for the Taniyama–Shimura conjecture. In 1986 Ribet proved that if the Taniyama–Shimura conjecture held, then so would Fermat's last theorem, which inspired Andrew Wiles to prove enough of it to prove Fermat's Last Theorem. "
  },
  {
    "name": "Luitzen Brouwer",
    "occupation": "mathematician",
    "image": "images/luitzen_brouwer.jpg",
    "description": "Luitzen Egbertus Jan Brouwer (27 February 1881 – 2 December 1966), usually cited as L. E. J. Brouwer, was a Dutch mathematician and philosopher, a graduate of the University of Amsterdam, who worked in topology, set theory, measure theory and complex analysis. He was the founder of the mathematical philosophy of intuitionism."
  },
  {
    "name": "Hermann Weyl",
    "occupation": "mathematician",
    "image": "images/hermann_weyl.jpg",
    "description": "Hermann Klaus Hugo Weyl 9 November 1885 – 8 December 1955) was a German mathematician, theoretical physicist and philosopher. His research has had major significance for theoretical physics as well as purely mathematical disciplines including number theory. He was one of the most influential mathematicians of the twentieth century, and an important member of the Institute for Advanced Study during its early years."
  },
  {
    "name": "Hermann Minkowski",
    "occupation": "mathematician",
    "image": "images/hermann_minkowski.jpg",
    "description": "Hermann Minkowski (22 June 1864 – 12 January 1909) was a German-Jewish mathematician. He is perhaps best known for his work in relativity, in which he showed in 1907 that his former student Albert Einstein's special theory of relativity (1905), could be understood geometrically as a theory of four-dimensional space–time, since known as the Minkowski spacetime."
  },
  {
    "name": "Andrej Bauer",
    "occupation": "mathematician",
    "image": "images/andrej_bauer.jpg",
    "description": "Andrej Bauer (born May 11, 1971) is a Slovenian mathematician at the University of Ljubljana where he holds the title Professor of Computational Mathematics. He does research in logic, constructive and computable mathematics, category theory, and semantics of programming languages. He got his Ph.D. at Carnegie Mellon University in 2000 under the supervision of Dana Scott."
  },
  {
    "name": "Felix Klein",
    "occupation": "mathematician",
    "image": "images/felix_klein.jpg",
    "description": "Christian Felix Klein (25 April 1849 – 22 June 1925) was a German mathematician and mathematics educator, known for his work in group theory, complex analysis, non-Euclidean geometry, and on the connections between geometry and group theory. His 1872 Erlangen Program, classifying geometries by their underlying symmetry groups, was a hugely influential synthesis of much of the mathematics of the day."
  },
  {
    "name": "Jaakko Hintikka",
    "occupation": "mathematician",
    "image": "images/jaakko_hintikka.jpg",
    "description": "Kaarlo Jaakko Juhani Hintikka (12 January 1929 – 12 August 2015) was a Finnish philosopher and logician. Author of 30 books and over 300 scholarly articles, Hintikka is regarded as the founder of formal epistemic logic and of game semantics for logic."
  },
  {
    "name": "Sami Hyypiä",
    "occupation": "footballer",
    "image": "images/sami_hyypia.jpg",
    "description": "Sami Tuomas Hyypiä (born 7 October 1973) is a Finnish football manager and former defender. By 2001, he regularly captained Liverpool FC and won a slew of honours, completing a cup treble of the League Cup, FA Cup and UEFA Cup. Hyypiä was part of Liverpool's victorious 2004–05 Champions League campaign, where his defensive partnership with Jamie Carragher helped them win in the final."
  },
  {
    "name": "Jürgen Klinsmann",
    "occupation": "footballer",
    "image": "images/jurgen_klinsmann.jpg",
    "description": "Jürgen Klinsmann (born 30 July 1964) is a German football manager and former player who is currently the head coach of the United States men's national soccer team. As a player, Klinsmann was part of the West German team that won the 1990 FIFA World Cup and the unified German team that won the 1996 UEFA European Championship. In 1995 he came in third in the FIFA World Player of the Year award."
  },
  {
    "name": "Francesco Totti",
    "occupation": "footballer",
    "image": "images/francesco_totti.jpg",
    "description": "Francesco Totti ( born 27 September 1976) is an Italian footballer who plays for and captains Serie A club Roma. Totti has spent his entire career at Roma, winning a Serie A title, two Coppa Italia titles, and two Supercoppa Italiana titles; he is the top goalscorer and the most capped player in the club's history. Totti is considered to be one of the greatest Italian players of all time, one of the most talented players of his generation, and also, by some, to be Roma's greatest player ever."
  },
  {
    "name": "Dennis Bergkamp",
    "occupation": "footballer",
    "image": "images/dennis_bergkamp.jpg",
    "description": "Dennis Bergkamp (born 10 May 1969) is a Dutch former professional footballer. After joining Arsenal in 1995, he helped the club win three Premier League titles, four FA Cup trophies, and reach the 2006 UEFA Champions League Final. He is widely regarded as one of the greatest players in his generation."
  },
  {
    "name": "Robert Lewandowski",
    "occupation": "footballer",
    "image": "images/robert_lewandowski.jpg",
    "description": "Robert Lewandowski (born 21 August 1988) is a Polish professional footballer who plays as a striker for Bayern Munich and captains the Poland national team. A full international for Poland since 2008, Lewandowski has earned 70 caps and was a member of their team at Euro 2012. With 29 goals, he ranks sixth among their top scorers of all time."
  },
  {
    "name": "Andriy Shevchenko",
    "occupation": "footballer",
    "image": "images/andriy_shevchenko.jpg",
    "description": "Andriy Mykolayovych Shevchenko (born 29 September 1976) is a former Ukrainian footballer who played for Dynamo Kyiv, Milan, Chelsea. He is ranked as the fifth top goalscorer in all European competitions with 67 goals. With a tally of 175 goals scored for Milan, Shevchenko is the second most prolific player in the history of the club. He is the all-time top scorer for the Ukrainian national team with 48 goals."
  },
  {
    "name": "Daniel Sturridge",
    "occupation": "footballer",
    "image": "images/daniel_sturridge.jpg",
    "description": "Daniel Andre Sturridge (born 1 September 1989) is an English footballer who plays for Liverpool and the England national team as a striker. During the 2013-14 Premier League season, Sturridge's haul of 21 league goals made him the runner-up in the season's Premier League Golden Boot, behind strike partner Suárez."
  },
  {
    "name": "Thibaut Courtois",
    "occupation": "footballer",
    "image": "images/thibaut_courtois.jpg",
    "description": "Thibaut Nicolas Marc Courtois (born 11 May 1992) is a Belgian professional footballer who plays for English club Chelsea and the Belgium national team as a goalkeeper. Courtois is widely regarded as one of the best goalkeepers in the world, and he won the 2012–13 and 2013–14 Ricardo Zamora Trophies while on loan at Atlético Madrid."
  },
  {
    "name": "Shinji Kagawa",
    "occupation": "footballer",
    "image": "images/shinji_kagawa.jpg",
    "description": "Shinji Kagawa (born 17 March 1989) is a Japanese professional footballer who plays for German club Borussia Dortmund and the Japan national team. A goal-scoring midfielder, he is known for his vision, technique, movement and deft passing. On 29 November 2012, Kagawa was named Asian Football Confederation International Player of the Year."
  },
  {
    "name": "Keisuke Honda",
    "occupation": "footballer",
    "image": "images/keisuke_honda.jpg",
    "description": "Keisuke Honda (born 13 June 1986) is a Japanese footballer who plays for Serie A club Milan and the Japan national football team. He has earned over 60 international caps since 2008, playing at the 2010 FIFA World Cup, the 2014 FIFA World Cup and winning the 2011 AFC Asian Cup, where he was also voted Player of the Tournament."
  },
  {
    "name": "Wayne Rooney",
    "occupation": "footballer",
    "image": "images/wayne_rooney.jpg",
    "description": "Wayne Mark Rooney (born 24 October 1985) is an English professional footballer who plays for and captains both Manchester United and the England national team. In September 2013, Rooney scored his 200th goal for United. He is currently on 233 goals, making him the club's third-highest goalscorer of all time."
  },
  {
    "name": "Ian Wright",
    "occupation": "footballer",
    "image": "images/ian_wright.jpg",
    "description": "Ian Edward Wright, MBE (born 3 November 1963) is an English former professional footballer turned television and radio personality. With Arsenal he has lifted the Premier League title, both major domestic trophies, and the European Cup Winners Cup. He played 581 league games, scoring 387 goals for seven clubs in Scotland and England, earning 33 caps for the English national team."
  },
  {
    "name": "Aleksandr Kerzhakov",
    "occupation": "footballer",
    "image": "images/aleksandr_kerzhakov.jpg",
    "description": "Aleksandr Anatolyevich Kerzhakov (born 27 November 1982 in Kingisepp) is a Russian international association football striker who currently plays for Russian Premier League club Zenit St. Petersburg and the Russia national football team. He is the most prolific goalscorer in the history of Russian football, with the number of goals scored in competitive games standing at 209 as of 15 October 2013."
  },
  {
    "name": "Liǔ Chuánzhì (柳传志)",
    "nationality": "Chinese",
    "image": "images/liu_chuanzhi.jpg",
    "description": "Liǔ Chuánzhì (Born April 29, 1944) is a Chinese businessman. Liu is the founder and former CEO of Lenovo, the largest computer maker in the world, and remains the paramount leader of the firm."
  },
  {
    "name": "Líu Yìfēi (刘亦菲)",
    "nationality": "Chinese",
    "image": "images/liu_yifei.jpg",
    "description": "Líu Yìfēi (刘亦菲) is a Chinese American actress, model and singer. She holds United States citizenship. In 2008, she co-starred with Jet Li and Jackie Chan in The Forbidden Kingdom, in which she played Golden Sparrow, an orphan seeking revenge against her parents' killer. In 2010, she starred in Love in Disguise with Leehom Wang."
  },
  {
    "name": "Líu Shīshī (刘诗诗)",
    "nationality": "Chinese",
    "image": "images/liu_shishi.jpg",
    "description": "Líu Shīshī (刘诗诗) (born March 10, 1987 in Beijing, China), also known by her English name Cecilia Liu, is a Chinese actress and ballerina. In May 2012, she was nominated for, and won the Magnolia Award (白玉蘭獎) for the most popular actress for her role in Chinese time-travel drama Scarlet Heart."
  },
  {
    "name": "Lǐ Yìfēng (李易峰)",
    "nationality": "Chinese",
    "image": "images/li_yifeng.jpg",
    "description": "Lǐ Yìfēng (李易峰) (born May 4, 1987) is a Chinese actor and singer from Chengdu. Li achieved fame in 2007 on the popular “My Hero” TV talent show. Modeling jobs and a series of successful pop songs followed, extending his popularity among a growing number of fans and landing him parts— supporting roles, first, then the leads—in a string of hit TV sitcoms."
  },
  {
    "name": "Hú Bīngqīng (胡冰卿)",
    "nationality": "Chinese",
    "image": "images/hu_binqing.jpg",
    "description": "Hú Bīngqīng (胡冰卿) (born January 25, 1992) is a Chinese actress. She was born in Shanghai , and graduated from Fudan University, Shanghai Institute of Visual Art Performance Department. She has played in many Chinese TV series such as The Imperial Doctoress (女医·明妃传) and The Legend of Qin (秦时明月)."
  },
  {
    "name": "Shào Xīngyún (邵星芸)",
    "nationality": "Chinese",
    "image": "images/shao_xingyun.jpg",
    "description": "Shào Xīngyún (Born May 19, 1989) is a net idol. She majored in music performance at the Zhejiang Institute of Media, and enjoys playing music, studying cinema and dance."
  },
  {
    "name": "Zhāng Zétiān (章泽天)",
    "nationality": "Chinese",
    "image": "images/zhang_zetian.jpg",
    "description": "Zhāng Zétiān (Born November 18, 1993) is a net idol turned product sponsor. She participated in many cheerleading competitions, and now is a spokesperson for many products such as Microsoft Bing."
  },
  {
    "name": "Chén Kǎigē (陈凯歌)",
    "nationality": "Chinese",
    "image": "images/chen_kaige.jpg",
    "description": "Chen Kaige (born August 12, 1952) is a Chinese film director and a leading figure of the fifth generation of Chinese cinema. His films are known for their visual flair and epic storytelling. Chen won the Palme d'Or at 1993 Cannes Film Festival and the International Federation of Film Critics (FIPRESCI) Award in 1993."
  },
  {
    "name": "Rèn Zhèngfēi (任正非)",
    "nationality": "Chinese",
    "image": "images/ren_zhengfei.jpg",
    "description": "Ren Zhengfei (born 1944 in Guizhou, China) is a Chinese businessman. He is the founder and president of Huawei Technologies Co. Ltd., headquartered in Shenzhen, China, and an ex-People's Liberation Army officer. Hurun Report listed Ren as the 556th richest person in China in 2013 with private assets of approximately $590 million USD."
  },
  {
    "name": "Zhèng Shuǎng (郑爽)",
    "nationality": "Chinese",
    "image": "images/zheng_shuang.jpg",
    "description": "Zhèng Shuǎng (born 22 August 1991) is a Chinese actress and singer. She graduated from the Beijing Film Academy in 2011, and subsequently starred in many films and television series, including Painted Mural (画壁), Secret History of Empress Wu, War of Desire, No Limit (无极限), and Secret History of Princess Taiping."
  },
  {
    "name": "Lù Hán (鹿晗)",
    "nationality": "Chinese",
    "image": "images/luhan.jpg",
    "description": "Lù Hán (鹿晗) (born April 20, 1990 in Beijing), is a Chinese singer and actor who was a former member of the South Korean-Chinese boy band EXO, and its subgroup EXO-M. He is signed to S.M. Entertainment in South Korea and Avex Trax in Japan. In 2014, China National Radio ranked Lu Han the sixth among the top ten most popular entertainment stars in the country."
  },
  {
    "name": "Yáng Mì (杨幂)",
    "nationality": "Chinese",
    "image": "images/yang_mi.jpg",
    "description": "Yáng Mì (杨幂) (born 12 September 1986 in Beijing) is a Chinese actress and singer. She is noted for her roles as Guo Xiang and Tang Xuejian in the television series The Return of the Condor Heroes (2006) and Chinese Paladin 3 (2009) respectively. She has now gained even greater popularity from her breakthrough role as Luo Qingchuan in Palace (2011)."
  },
  {
    "name": "Chuan Leekpai",
    "nationality": "Thai",
    "image": "images/chuan_leekpai.jpg",
    "description": "Chuan Leekpai (born July 28, 1938 in Trang) was the Prime Minister of Thailand from September 20, 1992 to May 19, 1995 and again from November 9, 1997 to February 9, 2001. As the leader of the Democrat Party, Chuan was elected in 1992 after the abortive coup by General Suchinda Kraprayoon, thus becoming Thailand's first prime minister to come to power without either aristocratic or military backing."
  },
  {
    "name": "Dhanin Chearavanont",
    "nationality": "Thai",
    "image": "images/dhanin_chearavanont.jpg",
    "description": "Dhanin Chearavanont (born 1939) is a Thai businessman based in Bangkok. As of Forbes 2013 List of World Billionaires, Chearavanont is placed 58th with a net worth of $14.3 billion, making him the richest person in Thailand and in Southeast Asia."
  },
  {
    "name": "Prayut Chan-o-cha",
    "nationality": "Thai",
    "image": "images/prayut_chan-o-cha.jpg",
    "description": "Prayut Chan-o-cha (born 21 March 1954) is a retired Royal Thai Army officer who is the current Prime Minister of Thailand and head of the National Council for Peace and Order (NCPO), a military junta that has the power to control the Prime Minister position. Prayut is a former Commander in Chief of the Royal Thai Army, the post he held from October 2010 to October 2014."
  },
  {
    "name": "Kanya Rattanapetch",
    "nationality": "Thai",
    "image": "images/kanya_rattanapetch.jpg",
    "description ": "Kanya Rattanapetch (born November 2, 1989) in Thailand, is a Thai model and actress. She is best known for her role in the 2007 film, The Love of Siam as Ying."
  },
  {
    "name": "James Assarasakorn",
    "nationality": "Thai",
    "image": "images/james_assarasakorn.jpg",
    "description": "James Assarasakorn (born July 3, 1993) known by his stage name James Ma, is a Thai actor and model based in Thailand. Ma currently attends Assumption University and made his acting debut in 2013."
  },
  {
    "name": "Nichkhun",
    "nationality": "Thai",
    "image": "images/nichkhun.jpg",
    "description": "Nichkhun Buck Horvejkul (born June 24, 1988) known mononymously as Nichkhun (Korean: 닉쿤), is an Thai-American rapper, singer, songwriter, model and actor. He is currently based in South Korea as a member of 2PM, a South Korean boy band."
  },
  {
    "name": "Pimtha",
    "nationality": "Thai",
    "image": "images/pimtha.jpg",
    "description": "Internet Idol. Graduated from Ritsumeikan Asia Pacific University."
  },
  {
    "name": "Pornnppan Pornpenpipat",
    "nationality": "Thai",
    "image": "images/pornnppan_pornpenpipat.jpg",
    "description": "Internet idol/singer. Competed in Academy Fantasia (Thailand's singing competition). Studies civil engineering."
  },
  {
    "name": "Frung",
    "nationality": "Thai",
    "image": "images/frung.jpg",
    "description": "Actress best known for her role in the Thai coming-of-age series Hormones."
  },
  {
    "name": "Charada Imraporn",
    "nationality": "Thai",
    "image": "images/charada_imraporn.jpg",
    "description": "Nicknamed Piglet, she was in the Disney Talent Contest 2004. She won 3rd Place: Semi-final Sing & Dance Contest Future Junior Talent Contest 2004 and 3rd Place: Semi-final SF Junior Singing Contest 2005. She was also in C-SA Dream Road To Stars 2009."
  }
];
