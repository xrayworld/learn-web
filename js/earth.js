var colorEarth = "rgb(255,195,15)";



function earthColorsR(north, south) { for (let l=north ; l<south ; l++) { $("#earth ul li")[l].style.borderRightColor = colorEarth; } }
//for (i=0;i<45;i++) { earthColorsR( i*106 , (i*106)+1 ); }

earthColorsR( 4668 , 4674 );/*NorthAmerica*/    
earthColorsR( 4562 , 4568 );/*NorthAmerica*/    
earthColorsR( 4456 , 4462 );/*NorthAmerica*/
earthColorsR( 4350 , 4358 );/*NorthAmerica*/    
earthColorsR( 4244 , 4254 );/*NorthAmerica*/
earthColorsR( 4138 , 4152 );/*NorthAmerica*/
earthColorsR( 4032 , 4050 );/*NorthAmerica*/
earthColorsR( 3926 , 3946 );/*NorthAmerica*/
earthColorsR( 3820 , 3844 );/*NorthAmerica*/
earthColorsR( 3714 , 3736 );/*NorthAmerica*/    earthColorsR( 3738 , 3740 );/*NAIsland*/
earthColorsR( 3606 , 3632 );/*NorthAmerica*/    earthColorsR( 3634 , 3636 );/*NAIsland*/
earthColorsR( 3500 , 3528 );/*NorthAmerica*/
earthColorsR( 3394 , 3424 );/*NorthAmerica*/
earthColorsR( 3288 , 3320 );/*NorthAmerica*/
earthColorsR( 3188 , 3216 );/*NorthAmerica*/
earthColorsR( 3082 , 3110 );/*NorthAmerica*/
earthColorsR(2976,2978);/*US*/    earthColorsR(2980,2992);/*US*/   earthColorsR( 2997 , 3004 );/*CenterAmerica*/
earthColorsR(2863,2867);/*US*/    earthColorsR(2870,2874);/*US*/    earthColorsR(2876,2884);/*US*/    earthColorsR( 2897 , 2898 );/*CenterAmerica*/
earthColorsR(2760,2766);/*US*/    earthColorsR(2768,2778);/*US*/    earthColorsR( 2894 , 2898 );/*CenterAmerica*/
earthColorsR(2654,2670);/*US*/    earthColorsR( 2787 , 2792 );/*CenterAmerica*/
earthColorsR(2548,2564);/*US*/    earthColorsR( 2681 , 2688 );/*CenterAmerica*/   earthColorsR(2700,2702);/*Galápagos*/
earthColorsR(2442,2460);/*US*/    earthColorsR( 2572 , 2584 );/*CenterAmerica*/
earthColorsR(2336,2348);/*US*/    earthColorsR(2354,2356);/*US*/    earthColorsR(2358,2360);/*US*/    earthColorsR( 2474 , 2482 );/*CenterAmerica*/   earthColorsR( 2490 , 2502 );/*Southamerica*/
earthColorsR(2230,2232);/*US*/    earthColorsR(2234,2236);/*US*/    earthColorsR(2252,2254);/*US*/    earthColorsR( 2374 , 2375 );/*CenterAmerica*/   earthColorsR( 2382 , 2402 );/*Southamerica*/
earthColorsR(2124,2126);/*US*/    earthColorsR(2128,2130);/*US*/    earthColorsR(2148,2150);/*US*/    earthColorsR( 2268 , 2300 );/*Southamerica*/
earthColorsR(2018,2020);/*US*/    earthColorsR(2044,2046);/*US*/    earthColorsR( 2160 , 2210 );/*Southamerica*/
earthColorsR(1940,1942);/*US*/    earthColorsR( 2054 , 2116 );/*SouthAmerica*/
earthColorsR( 1948 , 2012 );/*SouthAmerica*/
earthColorsR( 1842 , 1900 );/*SouthAmerica*/
earthColorsR( 1735 , 1790 );/*SouthAmerica*/
earthColorsR( 1631 , 1681 );/*SouthAmerica*/  earthColorsR( 1690 , 1692 );/*SouthAmerica*/
earthColorsR( 1528 , 1570 );/*SouthAmerica*/
earthColorsR( 1421 , 1459 );/*SouthAmerica*/
earthColorsR( 1322 , 1354 );/*SouthAmerica*/
earthColorsR( 1217 , 1244 );/*SouthAmerica*/
earthColorsR( 1114 , 1131 );/*SouthAmerica*/
earthColorsR( 1010 , 1020 );/*SouthAmerica*/


earthColorsR( 108 , 110 );/*AFRICA*/    earthColorsR( 126 , 132 );/*AFRICA*/    earthColorsR( 142 , 154 );/*AFRICA*/
earthColorsR( 108-106 , 110-106 );/*AFRICA*/    earthColorsR( 126-106 , 132-106 );/*AFRICA*/    earthColorsR( 138-106 , 158-106 );/*AFRICA*/



function earthColorsL(north, south) { for (let l=north ; l<south ; l++) { $("#earth ul li")[l].style.borderLeftColor = colorEarth; } }

//earthColorsL( 4593 , 4605 );/*Africa*/
//earthColorsL( 4484 , 4501 );/*Africa*/
//earthColorsL( 4373 , 4400 );/*Africa*/
//earthColorsL(4242+424,4244+424);/*islas*/   earthColorsL( 4260+424 , 4265+424 );/*Europe*/    earthColorsL( 4267+424 , 4295+424 );/*Africa*/
//earthColorsL(4136+424,4138+424);/*islas*/   earthColorsL( 4154 +424, 4159 +424);/*Europe*/    earthColorsL( 4161 +424, 4189 +424);/*Africa*/
earthColorsL(4030+636,4032+636);/*islas*/   earthColorsL(4036+636,4038+636);/*england*/   earthColorsL(4042+636,4044+636);/*Europe*/   earthColorsL( 4048 +636, 4053 +636);/*Europe*/   earthColorsL( 4055 +636, 4080 +636);/*Africa*/
earthColorsL(3928+636,3934+636);/*england*/   earthColorsL( 3935 +636, 3946 +636);/*Europe*/    earthColorsL( 3949 +636, 3974 +636);/*Africa*/
earthColorsL(3826+636,3828+636);/*england*/   earthColorsL( 3829 +636, 3838 +636);/*Europe*/    earthColorsL( 3843 +636, 3869 +636);/*Africa*/
earthColorsL( 3721 +636, 3730 +636);/*Europe*/    earthColorsL( 3737 +636, 3767 +636);/*Africa*/    earthColorsL(3769+636,3771+636);/*Africa*/
earthColorsL( 3615 +636, 3626 +636);/*Europe*/    earthColorsL(3628+636,3630+636);/*Europe*/    earthColorsL( 3631 +636, 3668 +636);/*Africa*/    earthColorsL(3676+636,3680+636);/*Africa*/
earthColorsL( 3510 +636, 3518 +636);/*Europe*/    earthColorsL(3520+636,3522 +636);/*Europe*/   earthColorsL( 3526 +636, 3578 +636);/*Africa*/
earthColorsL(3397+636,3400+636);/*norway*/    earthColorsL( 3401 +636, 3414 +636);/*Europe*/    earthColorsL(3416+636,3418+636);/*Europe island*/    earthColorsL( 3422 +636, 3476 +636);/*Africa*/
earthColorsL(3290+636,3294+636);/*norway*/ earthColorsL( 3297 +636, 3310 +636);/*Europe*/   earthColorsL(3312+636,3314+636);/*Europe island*/   earthColorsL( 3318 +636, 3370 +636);/*Africa*/
earthColorsL(3184+636,3190+636);/*norway*/    earthColorsL( 3191 +636, 3206 +636);/*Europe*/    earthColorsL( 3209 +636, 3262 +636);/*Africa*/
earthColorsL(3078+636,3084+636);/*norway*/    earthColorsL( 3085 +636, 3097 +636);/*Europe*/    earthColorsL( 3105 +636, 3152 +636);/*Africa*/
earthColorsL(2972+636,2976+636);/*norway*/    earthColorsL( 2979 +636, 2993 +636);/*Europe*/    earthColorsL( 3001 +636, 3040 +636);/*Africa*/
earthColorsL(2866+636,2870+636);/*norway*/    earthColorsL( 2873 +636, 2891 +636);/*Europe*/    earthColorsL( 2897 +636, 2921 +636);/*Africa*/
earthColorsL(2760+636,2762+636);/*norway*/    earthColorsL( 2765 +636, 2782 +636);/*Europe*/    earthColorsL(2784+636,2786+636);/*Turkey*/    earthColorsL(2792+636,2794+636);/*Israel*/    earthColorsL(2798+636,2814+636);/*Africa*/
earthColorsL(2654+636,2656+636);/*norway*/    earthColorsL( 2657 +636, 2674 +636);/*Europe*/    earthColorsL(2678+636,2682+636);/*Turkey*/    earthColorsL(2686+636,2692+636);/*Israel*/    earthColorsL(2696+636,2705+636);/*Africa*/
earthColorsL( 2547 +636, 2568 +636);/*Europe*/    earthColorsL(2572+636,2590+636);/*mesopotamia*/   earthColorsL(2594+636,2597+636);/*Africa*/
earthColorsL( 2441 +636, 2464 +636);/*Europe*/    earthColorsL(2466+636,2486+636);/*mesopotamia*/   earthColorsL(2488+636,2490+636);/*Africa*/
earthColorsL(2338+636,2378+636);/*Asia*/
earthColorsL(2232+636,2250+636);/*Rusia*/   earthColorsL(2252+636,2258+636);/*AsiaNorth*/  earthColorsL(2260+636,2270+636);/*AsiaSouth*/
earthColorsL(2122+636,2124+636);/*Rusia*/   earthColorsL(2126+636,2142+636);/*Rusia*/   earthColorsL(2148+636,2154+636);/*AsiaNorth*/   earthColorsL(2156+636,2162+636);/*AsiaSouth*/
earthColorsL(2020+636,2048+636);/*Rusia*/   earthColorsL(2050+636,2052+636);/*AsiaSouth*/
earthColorsL(1910+636,1942+636);/*Rusia*/
earthColorsL(1804+636,1806+636);/*Rusia island*/   earthColorsL(1808+636,1842+636);/*Rusia*/
earthColorsL(1700+636,1740+636);/*Rusia*/
earthColorsL(1594+636,1638+636);/*Rusia*/
earthColorsL(1488+636,1536+636);/*Rusia*/
earthColorsL(1382+636,1424+636);/*Rusia*/   earthColorsL(1430+636,1432+636);/*Rusia*/
earthColorsL(1276+636,1312+636);/*Rusia*/
earthColorsL(1276+530,1314+530);/*Rusia*/
earthColorsL(1276+424,1316+424);/*Rusia*/
earthColorsL(1278+318,1322+318);/*Rusia*/   earthColorsL(1326+318,1328+318);/*Rusia island*/
earthColorsL(1278+212,1314+212);/*Rusia*/   earthColorsL(1316+212,1318+212);/*Rusia*/   earthColorsL(1322+212,1324+212);/*Rusia island*/    earthColorsL(1326+212,1328+212);/*Rusia island*/
earthColorsL(1280+106,1298+106);/*Rusia*/   earthColorsL(1302+106,1312+106);/*Rusia*/   earthColorsL(1328+106,1330+106);/*Rusia*/
earthColorsL(1278,1286);/*Rusia*/   earthColorsL(1290,1296);/*Rusia*/     earthColorsL(1298,1300);/*Rusia*/     earthColorsL(1306,1312);/*Rusiaisland*/   earthColorsL(1326,1328);/*Rusiaisland*/   earthColorsL(1330,1332);/*Rusiaisland*/ 
earthColorsL(1172,1180);/*Rusia*/   earthColorsL(1184,1186);/*Rusia islands*/   earthColorsL(1204,1206);/*Rusia island*/    earthColorsL(1218,1222);/*indonesia*/   earthColorsL(1224,1226);/*island*/
earthColorsL(1064,1070);/*Rusia*/   earthColorsL(1080,1086);/*Rusia islands*/earthColorsL(1088,1090);/*Rusia islands*/earthColorsL(1092,1098);/*Rusia islands*/   earthColorsL(1106,1108);/*islands*/
earthColorsL(958,966);/*Rusia*/   earthColorsL(1002,1004);/*island*/    earthColorsL(1008,1010);/*island*/    earthColorsL(1020,1030);/*AUSTRALIA*/
earthColorsL(852,858);/*Rusia*/     earthColorsL(900,902);/*island*/    earthColorsL(910,928);/*AUSTRALIA*/
earthColorsL(746,752);/*Rusia*/   earthColorsL(794,796);/*island*/    earthColorsL(802,822);/*AUSTRALIA*/
earthColorsL(640,644);/*Rusia*/   earthColorsL(688,692);/*island*/    earthColorsL(698,714);/*AUSTRALIA*/
earthColorsL(534,536);/*Rusia*/   earthColorsL(582,586);/*island*/    earthColorsL(588,608);/*AUSTRALIA*/
earthColorsL(430,432);/*Rusia*/   earthColorsL(478,480);/*island*/    earthColorsL(484,504);/*AUSTRALIA*/   earthColorsL(506,508);/*AUSTRALIA island*/
earthColorsL(324,328);/*Rusia*/   earthColorsL(382,396);/*AUSTRALIA*/
earthColorsL(218,222);/*Rusia*/   earthColorsL(280,290);/*AUSTRALIA*/  
earthColorsL(110,116);/*Rusia*/
earthColorsL(4,10);/*Rusia*/    earthColorsL(30,32);/*islandalone*/   earthColorsL(82,84);/*islandalone*/