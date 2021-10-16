import {
	writable, derived
} from "svelte/store";


let data = JSON.parse(`
[
    {
        "id": "group-1",
        "title": "default",
        "sets": [
            {
                "id": "set-1",
                "title": "Inbox",
                "contents": [
                    {
                        "id": "link-359",
                        "title": "Overstock.com: Online Shopping - Bedding, Furniture, Electronics, Jewelry, Clothing & more",
                        "url": "https:\/\/www.overstock.com\/Home-Garden\/Buffet-Sideboard-Console-Table-with-Bottom-Shelf\/31727554\/product.html?refccid=OFYIDYZMCFWZBT2JXUQCZRGQTE&searchidx=17&kwds=buffets%20and%20sideboards&rfmt=material%3AGlass",
                        "display": true,
                        "dataType": "link"
					}]
				}]
			}]`);



async function getData() {
	const response = await fetch('http://localhost/working/backend/ajax.php?action=load');
	data = (await response.json());
	bookmarks.set(data);
}
getData();


export const bookmarks = writable(data);

/*
let data = JSON.parse(`

[
	{
		"id": "group-1",
		"title": "default",
		"sets": [
			{
				"id": "set-1",
				"title": "Inbox",
				"contents": [
					{
						"id": "link-359",
						"title": "Overstock.com: Online Shopping - Bedding, Furniture, Electronics, Jewelry, Clothing & more",
						"url": "https:\/\/www.overstock.com\/Home-Garden\/Buffet-Sideboard-Console-Table-with-Bottom-Shelf\/31727554\/product.html?refccid=OFYIDYZMCFWZBT2JXUQCZRGQTE&searchidx=17&kwds=buffets%20and%20sideboards&rfmt=material%3AGlass",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-358",
						"title": "Svelte for new developers",
						"url": "https:\/\/svelte.dev\/blog\/svelte-for-new-developers",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-357",
						"title": "https:\/\/www.wayfair.com\/furniture\/pdp\/beachcrest-home-heller-42-wide-server-w001308491.html?piid=1958739512",
						"url": "https:\/\/www.wayfair.com\/furniture\/pdp\/beachcrest-home-heller-42-wide-server-w001308491.html?piid=1958739512",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-356",
						"title": "\ud83c\udfa8 HTML Color Codes",
						"url": "https:\/\/html-color.codes\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-354",
						"title": "TP WP Reports Index",
						"url": "https:\/\/dev-resourcestravelportlandcom.pantheonsite.io\/reports\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-353",
						"title": "Curried Butternut Squash Soup | Minimalist Baker Recipes",
						"url": "https:\/\/minimalistbaker.com\/curried-butternut-squash-soup\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-351",
						"title": "https:\/\/www.pps.net\/COVID19Dashboard",
						"url": "https:\/\/www.pps.net\/COVID19Dashboard",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-348",
						"title": "https:\/\/docs.google.com\/spreadsheets\/d\/1NPH1n_kW0Agw1cDHcduJALNdItthz3vBEARHXJjT-Go\/edit#gid=52126521",
						"url": "https:\/\/docs.google.com\/spreadsheets\/d\/1NPH1n_kW0Agw1cDHcduJALNdItthz3vBEARHXJjT-Go\/edit#gid=52126521",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-347",
						"title": "WOTC APA Weapon &amp; Item Overhaul - Google Sheets",
						"url": "https:\/\/docs.google.com\/spreadsheets\/d\/1mv0xisMwAyIT2dZYAQjqFC9wD-ctRQdRasAJYequXc8\/edit#gid=5744899",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-339",
						"title": "Important information about COVID-19 tests for travelers to and from the UK and U.S. | U.S. Embassy &amp; Consulates in the United Kingdom",
						"url": "https:\/\/uk.usembassy.gov\/information-about-covid-tests-for-travelers-from-the-uk-to-us\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-338",
						"title": "Generation - Wikipedia",
						"url": "https:\/\/en.wikipedia.org\/wiki\/Generation#\/media\/File:Generation_timeline.svg",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-337",
						"title": "Steam Community :: Guide :: XCOM 2 Corpse Use Guide",
						"url": "https:\/\/steamcommunity.com\/sharedfiles\/filedetails\/?id=628762683",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-336",
						"title": "Travel Insights with Google",
						"url": "https:\/\/travelinsights.withgoogle.com\/intl\/en\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-333",
						"title": "Marketing budget 21\/22",
						"url": "https:\/\/travelportland.box.com\/s\/ksaiayhzop18xika4yqkcyeva0d6qebt",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-332",
						"title": "https:\/\/youtu.be\/UOtE_mrV3SY",
						"url": "https:\/\/youtu.be\/UOtE_mrV3SY",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-331",
						"title": "Here&#039;s What Visitors to San Francisco Can Do Right Now - HI USA",
						"url": "https:\/\/www.hiusa.org\/blog\/travel-guides\/why-you-should-visit-san-francisco-right-now",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-330",
						"title": "https:\/\/www.levi.com\/US\/en_US\/clothing\/men\/shirts\/cubano-shirt\/p\/726250043",
						"url": "https:\/\/www.levi.com\/US\/en_US\/clothing\/men\/shirts\/cubano-shirt\/p\/726250043",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-329",
						"title": "White Western Shirt | GUESS",
						"url": "https:\/\/www.guess.com\/us\/en\/men\/apparel\/shirts\/casual\/white-western-shirt-white\/M1GH12R4DR0-MRLD.html",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-328",
						"title": "https:\/\/ss-usa.s3.amazonaws.com\/c\/308483931\/media\/174660a7d38f8f76f04373096044823\/2021_SATS_Technology.pdf",
						"url": "https:\/\/ss-usa.s3.amazonaws.com\/c\/308483931\/media\/174660a7d38f8f76f04373096044823\/2021_SATS_Technology.pdf",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-327",
						"title": "TRPO | Article Taxonomy Definition - Google Sheets",
						"url": "https:\/\/docs.google.com\/spreadsheets\/d\/1CY2h4c9a5gcrZUcRhIeUP0FIMsAxPiRJOGMXQkiT-tE\/edit#gid=0",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-326",
						"title": "https:\/\/nissanfigarobuyersguide.com\/",
						"url": "https:\/\/nissanfigarobuyersguide.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-324",
						"title": "https:\/\/www.amateurphotographer.co.uk\/technique\/portrait_photography\/how-to-reproduce-hollywood-lighting-in-your-portrait-photography-60422",
						"url": "https:\/\/www.amateurphotographer.co.uk\/technique\/portrait_photography\/how-to-reproduce-hollywood-lighting-in-your-portrait-photography-60422",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-323",
						"title": "PCC public art GIS project",
						"url": "https:\/\/pccgisclub2020.wixsite.com\/mysite-2",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-322",
						"title": "http:\/\/192.168.0.1\/login.html",
						"url": "http:\/\/192.168.0.1\/login.html",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-321",
						"title": "https:\/\/www.travelportland.com\/meetings\/notepad?notepad=67952cfafb423819dfede4e1f9cf90c1",
						"url": "https:\/\/www.travelportland.com\/meetings\/notepad?notepad=67952cfafb423819dfede4e1f9cf90c1",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-320",
						"title": "https:\/\/www.kingstonbrass.com\/product\/kingston-brass-ksh1168pxh\/",
						"url": "https:\/\/www.kingstonbrass.com\/product\/kingston-brass-ksh1168pxh\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-318",
						"title": "Author Simon Sinek Is Full Of Hot Air (And Other Reasons You Should Follow His Lead)",
						"url": "https:\/\/www.forbes.com\/sites\/michaelschein\/2018\/06\/13\/simon-sinek-is-full-of-fluff-and-other-reasons-you-should-follow-his-lead\/?sh=29c19f256577",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-317",
						"title": "SVG scripting example: an interactive map",
						"url": "https:\/\/www.petercollingridge.co.uk\/tutorials\/svg\/interactive\/interactive-map\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-315",
						"title": "COVID-19 FAQ |  UCI Health | Orange County, CA",
						"url": "https:\/\/www.ucihealth.org\/covid-19\/covid-vaccine-faq",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-312",
						"title": "JavaScript reference - JavaScript | MDN",
						"url": "https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/JavaScript\/Reference",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-311",
						"title": "https:\/\/www.biketiresdirect.com\/product\/continental-gator-hardshell-700c-road-tire-folding?sg=501",
						"url": "https:\/\/www.biketiresdirect.com\/product\/continental-gator-hardshell-700c-road-tire-folding?sg=501",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-310",
						"title": "Continental Grand Prix 4-Season with Vectran at BikeTiresDirect",
						"url": "https:\/\/www.biketiresdirect.com\/product\/continental-grand-prix-4-season-with-vectran",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-306",
						"title": "Hypercolor - Tailwind CSS Gradient Palette",
						"url": "https:\/\/hypercolor.dev\/#gradients",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-305",
						"title": "Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.",
						"url": "https:\/\/tailwindcss.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-303",
						"title": "https:\/\/github.com\/LinkedInLearning\/javascript-essential-training-2832077",
						"url": "https:\/\/github.com\/LinkedInLearning\/javascript-essential-training-2832077",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-304",
						"title": "Lynda.com library login",
						"url": "https:\/\/www.lynda.com\/portal\/patron?org=multcolib.org",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-301",
						"title": "https:\/\/comboapp.com\/insights\/types-of-digital-advertising\/",
						"url": "https:\/\/comboapp.com\/insights\/types-of-digital-advertising\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-300",
						"title": "Travel Portland Digital Brand Reference",
						"url": "https:\/\/resources.travelportland.com\/richard\/brand\/digital-brand-reference.php",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-299",
						"title": "https:\/\/www.ribbonfarm.com\/2017\/08\/17\/the-premium-mediocre-life-of-maya-millennial",
						"url": "https:\/\/www.ribbonfarm.com\/2017\/08\/17\/the-premium-mediocre-life-of-maya-millennial",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-298",
						"title": "OHA vaccinations",
						"url": "https:\/\/public.tableau.com\/profile\/oregon.health.authority.covid.19#!\/vizhome\/OregonCOVID-19VaccinationTrends\/OregonStatewideVaccinationTrends",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-297",
						"title": "The Caribbean: Countries - Map Quiz Game",
						"url": "https:\/\/online.seterra.com\/en\/vgp\/3342",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-295",
						"title": "Pennington Biomedical Weight Loss Estimator",
						"url": "https:\/\/www.pbrc.edu\/research-and-faculty\/calculators\/weight-loss-predictor\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-294",
						"title": "Travel Portland ~ sendsites.com",
						"url": "https:\/\/travel-portland-svp20.sendsites.net\/L\/F\/761900185\/P\/TravelPortlandProposalTemplateL764",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-293",
						"title": "Kanban (development) - Wikipedia",
						"url": "https:\/\/en.wikipedia.org\/wiki\/Kanban_(development)",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-289",
						"title": "https:\/\/astro-charts.com\/tools\/synastry\/?name_1=R",
						"url": "https:\/\/astro-charts.com\/tools\/synastry\/?name_1=R&lat_1=51.50853&lng_1=-0.12574&place_1=London%2C+England%2C+United+Kingdom&date_1=1972-2-7+17-8&timeRadio_1=pm&name_2=A&lat_2=44.56457&lng_2=-123.26204&place_2=Corvallis%2C+Oregon%2C+United+States&date_2=1973-12-28+15-14&timeRadio_2=pm",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-288",
						"title": "https:\/\/glebekitchen.com\/indian-restaurant-curry-at-home\/",
						"url": "https:\/\/glebekitchen.com\/indian-restaurant-curry-at-home\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-287",
						"title": "Chicken Vindaloo Recipe  - Food.com",
						"url": "https:\/\/www.food.com\/recipe\/chicken-vindaloo-177572",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-286",
						"title": "saag aloo - Indian restaurant style - glebe kitchen",
						"url": "https:\/\/glebekitchen.com\/saag-aloo-indian-restaurant-style\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-285",
						"title": "Where Burning Effigies (Not Just Guy Fawkes\u2019s) Is Part of the Fun - The New York Times",
						"url": "https:\/\/nyti.ms\/2edUoCp",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-282",
						"title": "https:\/\/www.prana.com\/p\/monarch-flannel\/M23202575.html?dwvar_M23202575_color=Gravel&dwvar_M23202575_size=S&source=shoppingads&locale=en-US&mid=paidsearch&eid=google&gid=6&nid=cpcs_-_shopping_-_smart_-_f20_product_-_080720&oid=f20_products&gclid=EAIaIQobChMI3uSozpSp7AIVuhatBh0ydAbUEAQYASABEgKpavD_BwE",
						"url": "https:\/\/www.prana.com\/p\/monarch-flannel\/M23202575.html?dwvar_M23202575_color=Gravel&dwvar_M23202575_size=S&source=shoppingads&locale=en-US&mid=paidsearch&eid=google&gid=6&nid=cpcs_-_shopping_-_smart_-_f20_product_-_080720&oid=f20_products&gclid=EAIaIQobChMI3uSozpSp7AIVuhatBh0ydAbUEAQYASABEgKpavD_BwE",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-277",
						"title": "PPS District Calendar",
						"url": "https:\/\/www.pps.net\/cms\/lib\/OR01913224\/Centricity\/domain\/219\/board%20meeting%20materials\/Recommended%20PPS%20Calendar%20for%20SY2020-21.pdf",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-276",
						"title": "SOLVE",
						"url": "https:\/\/www.solveoregon.org\/volunteer-account-overview",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-275",
						"title": "https:\/\/damndelicious.net\/2019\/04\/15\/red-beans-and-rice\/",
						"url": "https:\/\/damndelicious.net\/2019\/04\/15\/red-beans-and-rice\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-272",
						"title": "https:\/\/www.healthline.com\/health\/how-to-be-happy-alone",
						"url": "https:\/\/www.healthline.com\/health\/how-to-be-happy-alone",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-267",
						"title": "Create a random route map",
						"url": "https:\/\/www.maps.ie\/map-my-route\/viewMap.php?route=153089",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-265",
						"title": "Long War 2 wiki",
						"url": "https:\/\/www.ufopaedia.org\/index.php\/Long_War_2#:~:text=Long%20War%202%20is%20a,to%20combat%20the%20alien%20threat.",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-264",
						"title": "Class in America and Donald Trump",
						"url": "https:\/\/billmoyers.com\/story\/class-america-donald-trump\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-261",
						"title": "Amazon.com: Lenovo ThinkVision P27h-10 27 LED LCD Monitor - 4 ms, Black (61AFGAR1US): Computers &amp; Accessories",
						"url": "https:\/\/www.amazon.com\/Lenovo-ThinkVision-P27h-10-LED-Monitor\/dp\/B071DK1TW8\/ref=sr_1_1?dchild=1&keywords=Lenovo+61AFGAR1US&qid=1595002248&sr=8-1",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-260",
						"title": "    Dell UltraSharp 27 USB-C Hub Monitor: U2721DE | Dell USA",
						"url": "https:\/\/www.dell.com\/en-us\/work\/shop\/dell-ultrasharp-27-usb-c-hub-monitor-u2721de\/apd\/210-awkh\/monitors-monitor-accessories",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-259",
						"title": "Coronavirus Vaccine Tracker - The New York Times",
						"url": "https:\/\/www.nytimes.com\/interactive\/2020\/science\/coronavirus-vaccine-tracker.html?action=click&module=RelatedLinks&pgtype=Article",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-258",
						"title": "Amy's digital marketing report card",
						"url": "https:\/\/travelportland.app.box.com\/file\/690752991527",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-257",
						"title": "https:\/\/www.oregonlive.com\/entertainment\/2010\/08\/10_enticing_urban_walkabouts_h.html",
						"url": "https:\/\/www.oregonlive.com\/entertainment\/2010\/08\/10_enticing_urban_walkabouts_h.html",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-256",
						"title": "Navy Suede Leather Chelsea Boots, Men's Style 2006 - Blundstone USA",
						"url": "https:\/\/www.blundstone.com\/shop\/navy-suede-leather-chelsea-boots-mens-style-2006",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-253",
						"title": "Gillian Grimm (ggrimm1)",
						"url": "https:\/\/padlet.com\/ggrimm1",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-249",
						"title": "TP COVID restart doc",
						"url": "https:\/\/travelportland.app.box.com\/file\/658610871334",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-248",
						"title": "Yum Yum Bowls with Knockoff Cafe Yumm Sauce",
						"url": "https:\/\/www.melskitchencafe.com\/yum-yum-bowls\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-247",
						"title": "5 bowl sauces",
						"url": "https:\/\/www.google.com\/amp\/s\/www.thekitchn.com\/5-easy-sauces-to-make-your-grain-bowls-pop-227266%3Famp%3D1",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-241",
						"title": "ActOn Double-Opt-in",
						"url": "https:\/\/connect.act-on.com\/hc\/en-us\/articles\/360023761334-Using-Double-Opt-in",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-239",
						"title": "Information Architecture Conference 2020 on Vimeo",
						"url": "https:\/\/vimeo.com\/showcase\/iac20",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-237",
						"title": "https:\/\/www.jackboxgames.com\/",
						"url": "https:\/\/www.jackboxgames.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-232",
						"title": "Squoosh - image compression",
						"url": "https:\/\/squoosh.app\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-229",
						"title": "https:\/\/travel-eye-axa.com\/new-ui\/global-events",
						"url": "https:\/\/travel-eye-axa.com\/new-ui\/global-events",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-228",
						"title": "Pun Generator | Generate tons of puns!",
						"url": "https:\/\/pungenerator.org\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-224",
						"title": "https:\/\/www.brookepsychotherapy.com\/social-skills-groups",
						"url": "https:\/\/www.brookepsychotherapy.com\/social-skills-groups",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-223",
						"title": "https:\/\/www.psychologytoday.com\/us\/groups\/child-or-adolescent\/oregon",
						"url": "https:\/\/www.psychologytoday.com\/us\/groups\/child-or-adolescent\/oregon",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-222",
						"title": "https:\/\/irlsocialskills.com\/",
						"url": "https:\/\/irlsocialskills.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-218",
						"title": "https:\/\/docs.microsoft.com\/en-us\/dotnet\/standard\/base-types\/regular-expression-language-quick-reference",
						"url": "https:\/\/docs.microsoft.com\/en-us\/dotnet\/standard\/base-types\/regular-expression-language-quick-reference",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-217",
						"title": "Use regular expressions - Visual Studio | Microsoft Docs",
						"url": "https:\/\/docs.microsoft.com\/en-us\/visualstudio\/ide\/using-regular-expressions-in-visual-studio?view=vs-2019",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-214",
						"title": "https:\/\/bakerbettie.com\/classic-streusel-topping\/",
						"url": "https:\/\/bakerbettie.com\/classic-streusel-topping\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-213",
						"title": "Language Log: The Dan Brown code",
						"url": "http:\/\/itre.cis.upenn.edu\/~myl\/languagelog\/archives\/000844.html",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-212",
						"title": "Calming Your Brain During Conflict",
						"url": "https:\/\/hbr.org\/2015\/12\/calming-your-brain-during-conflict",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-211",
						"title": "The Newspaper Clipping Generator - Create your own fun newspaper",
						"url": "http:\/\/www.fodey.com\/generators\/newspaper\/snippet.asp",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-210",
						"title": "add emoji support to a website",
						"url": "http:\/\/blog.farrant.me\/adding-emoji-support-to-any-website\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-209",
						"title": "The Dictionary of Obscure Sorrows",
						"url": "https:\/\/www.dictionaryofobscuresorrows.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-208",
						"title": "Pushing your local Git repository to a DreamHost server \u2014 Windows &ndash; DreamHost",
						"url": "https:\/\/help.dreamhost.com\/hc\/en-us\/articles\/115000732471-Pushing-your-local-Git-repository-to-a-DreamHost-server-Windows",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-207",
						"title": "MDwiki homepage",
						"url": "http:\/\/dynalon.github.io\/mdwiki\/#!index.md",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-205",
						"title": "https:\/\/www.strategygamer.com\/articles\/civilization-vi-best-civilisations-in-civilization-vi\/",
						"url": "https:\/\/www.strategygamer.com\/articles\/civilization-vi-best-civilisations-in-civilization-vi\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-184",
						"title": "http:\/\/www.adobepress.com\/articles\/article.asp?p=1860949",
						"url": "http:\/\/www.adobepress.com\/articles\/article.asp?p=1860949",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-176",
						"title": "FlyPDX - CarbonOffsets",
						"url": "https:\/\/www.flypdx.com\/CarbonOffsets",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-169",
						"title": "https:\/\/www.psychologytoday.com\/us\/blog\/ambigamy\/201508\/ten-tips-people-who-second-guess-themselves",
						"url": "https:\/\/www.psychologytoday.com\/us\/blog\/ambigamy\/201508\/ten-tips-people-who-second-guess-themselves",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-168",
						"title": "https:\/\/www.copypastecharacter.com\/",
						"url": "https:\/\/www.copypastecharacter.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-148",
						"title": "Semantic UI",
						"url": "https:\/\/semantic-ui.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-142",
						"title": "countries of the world outline map",
						"url": "http:\/\/www.freeusandworldmaps.com\/images\/WorldPrintable\/WorldMercator6NoLinesPrint.jpg",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-138",
						"title": "https:\/\/www.ikea.com\/us\/en\/catalog\/products\/10364759\/",
						"url": "https:\/\/www.ikea.com\/us\/en\/catalog\/products\/10364759\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-133",
						"title": "How To Figure Out What Makes You Happy (so you can do more of it) -",
						"url": "https:\/\/www.yesandyes.org\/2016\/05\/how-to-figure-out-what-makes-you-happy.html",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-129",
						"title": "Minecraft cat model for Peanut",
						"url": "https:\/\/www.pinterest.com\/pin\/420242208958757228\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-125",
						"title": "Portland Mural Mapping Project - Google My Maps",
						"url": "https:\/\/www.google.com\/maps\/d\/u\/0\/viewer?mid=1fDffbfECEqcJ1rnb8QSw8JmYPPKh4xRW&ll=45.52130583501213%2C-122.67759306911552&z=16",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-124",
						"title": " Yosemite -- Worth a trip in the busy summer season?? - Yosemite National Park Forum - TripAdvisor ",
						"url": "https:\/\/www.tripadvisor.com\/ShowTopic-g61000-i315-k2518107-Yosemite_Worth_a_trip_in_the_busy_summer_season-Yosemite_National_Park_California.html",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-123",
						"title": "https:\/\/www.nps.gov\/yose\/planyourvisit\/upload\/mileages9-2007.pdf",
						"url": "https:\/\/www.nps.gov\/yose\/planyourvisit\/upload\/mileages9-2007.pdf",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-118",
						"title": "Shopston",
						"url": "http:\/\/richardtammar.com\/shopston\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-115",
						"title": "MTG Cardsmith: A Magic: The Gathering Custom Card Maker",
						"url": "https:\/\/mtgcardsmith.com",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-113",
						"title": "HTML for printing magic cards",
						"url": "https:\/\/boardgames.stackexchange.com\/questions\/11077\/where-can-i-get-custom-magic-the-gathering-cards-printed",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-101",
						"title": "Alternatives to the world\u2019s most crowded tourist destinations - Washington Post",
						"url": "https:\/\/www.washingtonpost.com\/graphics\/2018\/lifestyle\/overbooked",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-98",
						"title": "Smoke alarm manual",
						"url": "https:\/\/www.utcccs-cdn.com\/hvac\/docs\/2001\/Public\/02\/User_Guide_Kidde_i4618AC_ENG.pdf",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-95",
						"title": "Google",
						"url": "https:\/\/www.google.com",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-93",
						"title": "No Fear Shakespeare: Hamlet: Act 2  Scene 2  Page 13",
						"url": "https:\/\/www.sparknotes.com\/nofear\/shakespeare\/hamlet\/page_110\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-92",
						"title": "Hamlet, Act III, Scene I [To be, or not to be] by William Shakespeare - Poems | poets.org",
						"url": "https:\/\/m.poets.org\/poetsorg\/poem\/hamlet-act-iii-scene-i-be-or-not-be",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-39",
				"title": "Gazpacho",
				"contents": [
					{
						"id": "link-355",
						"title": "Creamy Gazpacho Andaluz | Cook&#x27;s Illustrated",
						"url": "https:\/\/www.cooksillustrated.com\/recipes\/6061-creamy-gazpacho-andaluz",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-346",
						"title": "12 Gazpacho Recipes That Will Help You Stay Chill During Meatless Mondays - Brit + Co",
						"url": "https:\/\/www.brit.co\/gazpacho-recipes\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-345",
						"title": "Thai Melon Gazpacho | Oregonian Recipes",
						"url": "https:\/\/recipes.oregonlive.com\/recipes\/thai-melon-gazpacho",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-340",
						"title": "Mango Gazpacho | Oregonian Recipes",
						"url": "https:\/\/recipes.oregonlive.com\/recipes\/mango-gazpacho",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-341",
						"title": "Chilled Mango Gazpacho | Oregonian Recipes",
						"url": "https:\/\/recipes.oregonlive.com\/recipes\/chilled-mango-gazpacho",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-342",
						"title": "Watermelon Gazpacho | Oregonian Recipes",
						"url": "https:\/\/recipes.oregonlive.com\/recipes\/watermelon-gazpacho",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-343",
						"title": "Chilled Creole Tomato Soup With Tapenade | Oregonian Recipes",
						"url": "https:\/\/recipes.oregonlive.com\/recipes\/chilled-creole-tomato-soup-with-tapenade",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-344",
						"title": "Green Gazpacho With Crab | Oregonian Recipes",
						"url": "https:\/\/recipes.oregonlive.com\/recipes\/green-gazpacho-with-crab",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-38",
				"title": "Nutrition",
				"contents": [
					{
						"id": "link-307",
						"title": "https:\/\/www.verywellfit.com\/recipe-nutrition-analyzer-4157076",
						"url": "https:\/\/www.verywellfit.com\/recipe-nutrition-analyzer-4157076",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-37",
				"title": "Gardening",
				"contents": [
					{
						"id": "link-309",
						"title": "The Ultimate Guide to Growing Blackcurrants - Chris Bowers",
						"url": "https:\/\/www.chrisbowers.co.uk\/article\/the-ultimate-guide-to-growing-blackcurrants\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-308",
						"title": "Currants and Gooseberries | Portland Nursery",
						"url": "https:\/\/portlandnursery.com\/fruits\/currant\/",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-36",
				"title": "sendsites",
				"contents": [
					{
						"id": "link-291",
						"title": "Meet Google Drive \u2013 One place for all your files",
						"url": "https:\/\/drive.google.com\/drive\/u\/3\/folders\/1eQU38rxGaLIbW_SbPE0oQBBOreH2sWxI",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-292",
						"title": "Travel Portland ~ sendsites.com",
						"url": "https:\/\/travel-portland-svp20.sendsites.net\/L\/F\/213967598\/P\/SampleProposalWsbi",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-35",
				"title": "things to share",
				"contents": [],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-34",
				"title": "Food Carts Project",
				"contents": [
					{
						"id": "link-283",
						"title": "Business District Map - Venture PortlandVenture Portland",
						"url": "http:\/\/ventureportland.org\/business-districts\/business-district-map\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-270",
						"title": "LucidChart",
						"url": "https:\/\/app.lucidchart.com\/documents\/edit\/852de5ad-67bf-48d7-8a46-794147c9f242#",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-269",
						"title": "Airtable - Food Carts",
						"url": "https:\/\/airtable.com\/tblLoIO9FGIie6Srd\/viwkRKqBdNaG3Y3Bp?blocks=hide",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-271",
						"title": "TeamGantt",
						"url": "https:\/\/prod.teamgantt.com\/gantt\/schedule\/?ids=2289528#ids=2289528&user=&custom=&company=&hide_completed=false&date_filter=&color_filter=",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-30",
				"title": "VS Code",
				"contents": [
					{
						"id": "link-132",
						"title": "Color Theme | Visual Studio Code Extension API",
						"url": "https:\/\/code.visualstudio.com\/api\/extension-guides\/color-theme#create-a-new-color-theme",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-130",
						"title": "Theme Color | Visual Studio Code Extension API",
						"url": "https:\/\/code.visualstudio.com\/api\/references\/theme-color#scrollbar-control",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-131",
						"title": "Visual Studio Code Themes",
						"url": "https:\/\/code.visualstudio.com\/docs\/getstarted\/themes#_customizing-a-color-theme",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-28",
				"title": "DragonSpell",
				"contents": [
					{
						"id": "link-313",
						"title": "Travel Portland Digital Brand Reference",
						"url": "http:\/\/dev-resourcestravelportlandcom.pantheonsite.io\/richard\/brand\/digital-brand-reference.php",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-243",
						"title": "Dev Ops Special - Google Slides",
						"url": "https:\/\/docs.google.com\/presentation\/d\/1r9AJJVxa_GSxP6ii8zCc-Tobysjsg3gMnHb4JmxprAY\/edit#slide=id.p",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-242",
						"title": "Doorbell submissions anonymized backup (box)",
						"url": "https:\/\/travelportland.box.com\/s\/s2vsui1fxbp6z1u0x0zo3xu4cuqmd9la",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-240",
						"title": "TravelPortland.com | Staff Feedback",
						"url": "https:\/\/form.jotform.com\/92727183627162",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-195",
						"title": "Dragonspell Taxonomies - Google Sheets",
						"url": "https:\/\/docs.google.com\/spreadsheets\/d\/1w1Q-pSjq3wKo3HIpEVx5c0-Cn3Enkl6i-CJI3EmdWrI\/edit?usp=sharing",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-170",
						"title": "Dragonspell Admin Guide",
						"url": "http:\/\/live-tpweb-adminguide.pantheonsite.io\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-163",
						"title": "invision mockups",
						"url": "https:\/\/thinkshout.invisionapp.com\/d\/main#\/projects\/prototypes\/15966748",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-155",
						"title": "Dragonspell Migration checklist",
						"url": "https:\/\/3.basecamp.com\/3498643\/buckets\/7306722\/documents\/1964677665",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-127",
						"title": "Dragonspell (sandbox \/ live)",
						"url": "http:\/\/live-dragonspell.pantheonsite.io\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-153",
						"title": "tp.com dev environment setup",
						"url": "https:\/\/github.com\/travelportland\/travelportland.com\/wiki\/Development-Environment-on-Windows",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-117",
						"title": "Capitaine &ndash; Letters from Sweden",
						"url": "https:\/\/lettersfromsweden.se\/font\/capitaine\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-116",
						"title": "Commercial Type \u00bb Catalog \u00bb Marr Sans Collection",
						"url": "https:\/\/commercialtype.com\/catalog\/marr_sans",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-33",
				"title": "Dining Month",
				"contents": [
					{
						"id": "link-192",
						"title": "Basecamp: Dining Month",
						"url": "https:\/\/3.basecamp.com\/3498643\/projects\/13271491",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-190",
						"title": "Dining Month Brief 2020 - Google Docs",
						"url": "https:\/\/docs.google.com\/document\/d\/1vcLJfTtppTzhwFHYr7PXCHSzKZpHDvTO8JjqswEhiXI\/edit",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-191",
						"title": "DSPL | 2020 DM | Schedule and roles - Google Sheets",
						"url": "https:\/\/docs.google.com\/spreadsheets\/d\/1ZkWNrcJhFGtceT_upALW0sJuzbZrxUDxQxeal8UEQMU\/edit#gid=0",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-27",
				"title": "Gift ideas",
				"contents": [
					{
						"id": "link-204",
						"title": "GEOMETRIC FORMULAS Fine Art Print by Jazzberry Blue | Etsy",
						"url": "https:\/\/www.etsy.com\/listing\/196581344\/geometric-formulas-fine-art-print-by",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-203",
						"title": "Wood TCG Deck & Counter Dice Box Mtg Yugioh Pokemon KeyForge | Etsy",
						"url": "https:\/\/www.etsy.com\/listing\/463745550\/wood-tcg-deck-counter-dice-box-mtg?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=mtg&ref=sr_gallery-1-6&organic_search_click=1&cns=1",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-202",
						"title": "Minecraft Rug CCC19101530 - Richleen",
						"url": "https:\/\/www.richleen.com\/products\/minecraft-rug-ccc19101530?variant=1000000895655263",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-108",
						"title": "MTG on Etsy",
						"url": "https:\/\/www.etsy.com\/search?q=mtg",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-166",
						"title": "https:\/\/www.cathkidston.com\/home-view-all\/button-spot-mini-stanley-debossed-mug-1035214",
						"url": "https:\/\/www.cathkidston.com\/home-view-all\/button-spot-mini-stanley-debossed-mug-1035214",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-167",
						"title": "https:\/\/www.cathkidston.com\/button-spot\/button-spot-reversible-cross-body-bag-1035076",
						"url": "https:\/\/www.cathkidston.com\/button-spot\/button-spot-reversible-cross-body-bag-1035076",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-99",
						"title": "Amazonite Necklace Amazonite Pendant Gift for Women Gemstone | Etsy",
						"url": "https:\/\/www.etsy.com\/listing\/491387033\/amazonite-necklace-amazonite-pendant?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=gift+for+women&ref=sr_gallery-2-25&bes=1",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-103",
						"title": "GEOMETRIC FORMULAS Gicl\u00e9e Fine Art Print\/Photo Print\/Poster | Etsy",
						"url": "https:\/\/www.etsy.com\/listing\/196581344\/geometric-formulas-giclee-fine-art",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-109",
						"title": "English Breakfast Tea Towel | Etsy",
						"url": "https:\/\/www.etsy.com\/listing\/620901282\/english-breakfast-tea-towel?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=english+tea+towels&ref=sr_gallery-1-11&organic_search_click=1",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-25",
				"title": "JavaScript",
				"contents": [
					{
						"id": "link-145",
						"title": "Looping through objects in JavaScript | Zell Liew",
						"url": "https:\/\/zellwk.com\/blog\/looping-through-js-objects\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-90",
						"title": "You Might Not Need jQuery",
						"url": "http:\/\/youmightnotneedjquery.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-26",
						"title": "Building web components using ES6 classes - Polymer Project",
						"url": "https:\/\/www.polymer-project.org\/blog\/es6",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-76",
						"title": "async : &amp; await",
						"url": "https:\/\/davidwalsh.name\/async-await",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-24",
				"title": "React",
				"contents": [
					{
						"id": "link-147",
						"title": "Parcel",
						"url": "https:\/\/parceljs.org\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-88",
						"title": "Common pitfall in initialising state based on props in React JS",
						"url": "https:\/\/hackernoon.com\/common-pitfall-in-initialising-state-based-on-props-in-react-js-d56795a944aa",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-89",
						"title": "Update State of a Component from Another in React - CodeProject",
						"url": "https:\/\/www.codeproject.com\/Tips\/1215984\/Update-State-of-a-Component-from-Another-in-React",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-87",
						"title": "GitHub - atlassian\/react-beautiful-dnd: Beautiful and accessible drag and drop for lists with React",
						"url": "https:\/\/github.com\/atlassian\/react-beautiful-dnd",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-85",
						"title": "Binding callbacks in React components \u2013 Arjun Sarode \u2013 Medium",
						"url": "https:\/\/medium.com\/@rjun07a\/binding-callbacks-in-react-components-9133c0b396c6",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-86",
						"title": "You Probably Don't Need Derived State \u2013 React Blog",
						"url": "https:\/\/reactjs.org\/blog\/2018\/06\/07\/you-probably-dont-need-derived-state.html",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-11",
				"title": "This Project",
				"contents": [
					{
						"id": "link-30",
						"title": "\u2728 Parcel Production",
						"url": "https:\/\/parceljs.org\/production.html",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-22",
				"title": "Personal interest",
				"contents": [
					{
						"id": "link-236",
						"title": "Jackbox.TV",
						"url": "https:\/\/jackbox.tv\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-143",
						"title": "How To Get Over a Breakup, According to Science | Time",
						"url": "http:\/\/time.com\/5287211\/how-to-get-over-a-breakup\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-73",
						"title": "SE Portland Tool Library",
						"url": "https:\/\/sites.google.com\/septl.org\/website\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-70",
						"title": "Separated by a Common Language",
						"url": "https:\/\/separatedbyacommonlanguage.blogspot.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-82",
						"title": "Calming Your Brain During Conflict",
						"url": "https:\/\/hbr.org\/2015\/12\/calming-your-brain-during-conflict",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-78",
						"title": "Columbia Gorge Hikes Not Closed by Eagle Creek Fire | Friends of the Columbia Gorge",
						"url": "https:\/\/gorgefriends.org\/hike-the-gorge\/columbia-gorge-hiking-opportunities.html",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-72",
						"title": "Trail Alerts | Friends of the Columbia Gorge",
						"url": "https:\/\/gorgefriends.org\/hike-the-gorge\/trail-alerts.html",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-80",
						"title": "Profiles Archive - The 5 Love Languages\u00ae",
						"url": "https:\/\/www.5lovelanguages.com\/profile\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-79",
						"title": "Campgrounds and Camping Reservations - ReserveAmerica",
						"url": "https:\/\/www.reserveamerica.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-81",
						"title": "Walking Tours | Macs Adventure",
						"url": "https:\/\/www.macsadventure.com\/us\/",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-8",
				"title": "Recipes",
				"contents": [
					{
						"id": "link-316",
						"title": "Low Fat Scones | Baking Mad",
						"url": "https:\/\/www.bakingmad.com\/recipe\/calorie-conscious-scones",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-302",
						"title": "Healthy Oatmeal Cookies {Made with Applesauce!} - WellPlated.com",
						"url": "https:\/\/www.wellplated.com\/healthy-oatmeal-cookies\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-273",
						"title": "Easy Gazpacho (From Canned Tomatoes) | Fuss Free Flavours",
						"url": "https:\/\/fussfreeflavours.com\/easy-gazpacho-canned-tomatoes\/#Ingredients",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-263",
						"title": "Easy Pickled Onions",
						"url": "https:\/\/sharedappetite.com\/recipes\/easy-pickled-onions\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-266",
						"title": "Vegetables, Salt, and the Science of Perfect Gazpacho | The Food Lab | Serious Eats",
						"url": "https:\/\/www.seriouseats.com\/2011\/08\/how-to-make-perfect-gazpacho-the-food-lab-salting-vegetables-science.html",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-246",
						"title": "The Whole Bowl - Tali Sauce Recipe {naturally Gluten Free} - Sweetphi",
						"url": "https:\/\/sweetphi.com\/whole-bowl-tali-sauce-recipe-naturally-gluten-free\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-193",
						"title": "The Best Bacon Jam Recipe | The Endless Meal\u00ae",
						"url": "https:\/\/www.theendlessmeal.com\/the-best-bacon-jam\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-175",
						"title": "Classic Tomato Soup Recipe - Recipe - FineCooking",
						"url": "https:\/\/www.finecooking.com\/recipe\/classic-tomato-soup",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-146",
						"title": "https:\/\/www.iheartnaptime.net\/perfect-crepe-recipe\/",
						"url": "https:\/\/www.iheartnaptime.net\/perfect-crepe-recipe\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-144",
						"title": "Paul Hollywood&#x27;s Chelsea buns recipe - BBC Food",
						"url": "https:\/\/www.bbc.com\/food\/recipes\/chelsea_buns_01576",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-8",
						"title": "How to make shrubs",
						"url": "https:\/\/food52.com\/blog\/13831-how-to-make-shrubs-aka-drinking-vinegars-without-a-recipe",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-141",
						"title": "Dairy Free Coconut Custard - What the Fork",
						"url": "https:\/\/www.whattheforkfoodblog.com\/2016\/06\/13\/dairy-free-coconut-custard\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-122",
						"title": "      Coq au Vin | Cook's Illustrated    ",
						"url": "https:\/\/www.cooksillustrated.com\/recipes\/564-coq-au-vin?incode=MCSCD00L0&ref=new_search_experience_4",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-121",
						"title": "      Modern Coq au Vin | Cook's Illustrated    ",
						"url": "https:\/\/www.cooksillustrated.com\/recipes\/3189-modern-coq-au-vin?incode=MCSCD00L0&ref=new_search_experience_1",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-97",
						"title": "Apple crisp",
						"url": "https:\/\/tastesbetterfromscratch.com\/apple-crisp\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-12",
						"title": "Perfect Coconut Macaroons",
						"url": "https:\/\/www.allrecipes.com\/recipe\/220926\/perfect-coconut-macaroons\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-10",
						"title": "Iced fingers",
						"url": "https:\/\/www.bbc.com\/food\/recipes\/iced_fingers_34133",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-17",
						"title": "Streusel Topping",
						"url": "https:\/\/www.geniuskitchen.com\/recipe\/streusel-topping-127724",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-16",
						"title": "The Best Streusel Apple Pie Ever",
						"url": "https:\/\/themom100.com\/recipe\/the-best-streusel-apple-pie-ever\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-18",
						"title": "Curry Fried Rice",
						"url": "https:\/\/www.veganricha.com\/2018\/09\/curry-fried-rice.html#wprm-recipe-container-29424",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-15",
						"title": "Cream Of Chicken Soup",
						"url": "http:\/\/www.geniuskitchen.com\/recipe\/cream-of-chicken-soup-82588",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-11",
						"title": "Pulled pork croquettes",
						"url": "http:\/\/www.foodtolove.co.nz\/recipes\/hopgoods-pulled-pork-croquettes-35897",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-9",
						"title": "Spicy Vegan Jambalaya",
						"url": "http:\/\/www.lifeasastrawberry.com\/spicy-vegan-jambalaya\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-139",
						"title": "Thin Mint Crackers Recipe - Allrecipes.com",
						"url": "https:\/\/www.allrecipes.com\/recipe\/10112\/thin-mint-crackers\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-159",
						"title": "https:\/\/www.thekitchn.com\/how-to-make-crispy-juicy-fried-chicken-that-s-better-than-kfc-242602?utm_source=RSS",
						"url": "https:\/\/www.thekitchn.com\/how-to-make-crispy-juicy-fried-chicken-that-s-better-than-kfc-242602?utm_source=RSS&utm_medium=feed&utm_campaign=Category%2FChannel%3A+Main&crl8_id=b7e93ce1-996a-49fb-adde-eb7bfea9cad2",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-13",
						"title": "Southwestern-style Quinoa Salad",
						"url": "https:\/\/tasty.co\/recipe\/southwestern-style-quinoa-salad",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-140",
						"title": "risotto tips",
						"url": "https:\/\/www.theguardian.com\/lifeandstyle\/wordofmouth\/2010\/may\/06\/how-to-make-perfect-risotto",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-96",
						"title": "Flavorful Spanish Rice - Life Made Simple",
						"url": "https:\/\/lifemadesimplebakes.com\/2015\/08\/flavorful-spanish-rice\/",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-17",
				"title": "Design",
				"contents": [
					{
						"id": "link-84",
						"title": "An Ultimate Guide To CSS Pseudo Classes And Pseudo Elements \u2014 Smashing Magazine",
						"url": "https:\/\/www.smashingmagazine.com\/2016\/05\/an-ultimate-guide-to-css-pseudo-classes-and-pseudo-elements\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-75",
						"title": "How to avoid faux-italic & bold in CSS",
						"url": "http:\/\/www.metaltoad.com\/blog\/how-use-font-face-avoid-faux-italic-and-bold-browser-styles",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-45",
						"title": "Google Web Fonts Typographic Project",
						"url": "https:\/\/femmebot.github.io\/google-type\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-46",
						"title": "Font Library | An open source project to tag and organize Google Fonts.",
						"url": "https:\/\/katydecorah.com\/font-library\/#!\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-65",
						"title": "{placekitten} - Placeholder kitten images for developers",
						"url": "http:\/\/placekitten.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-25",
						"title": "Contextual styling with custom properties ",
						"url": "http:\/\/simurai.com\/blog\/2018\/04\/01\/contextual-styling",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-67",
						"title": "CSS Selectors",
						"url": "https:\/\/code.tutsplus.com\/tutorials\/the-30-css-selectors-you-must-memorize--net-16048",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-16",
				"title": "Poetry",
				"contents": [
					{
						"id": "link-31",
						"title": "If",
						"url": "https:\/\/www.poetryfoundation.org\/poems\/46473\/if---",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-14",
				"title": "Coding",
				"contents": [
					{
						"id": "link-156",
						"title": "https:\/\/www.sassmeister.com\/",
						"url": "https:\/\/www.sassmeister.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-83",
						"title": "PHP Live Regex",
						"url": "http:\/\/www.phpliveregex.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-66",
						"title": "Emmet Cheat Sheet",
						"url": "https:\/\/docs.emmet.io\/cheat-sheet\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-7",
						"title": "TP.com Development-Environment-on-Windows",
						"url": "https:\/\/github.com\/travelportland\/travelportland.com\/wiki\/Development-Environment-on-Windows",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-68",
						"title": "JSONP",
						"url": "https:\/\/www.w3schools.com\/js\/js_json_jsonp.asp",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-69",
						"title": "Our venue data...",
						"url": "https:\/\/www.travelportland.com\/wp-json\/tpdx\/v1\/venue?_jsonp=kittens",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-154",
						"title": "This Ain\u2019t Disney: A practical guide to CSS transitions and animations",
						"url": "https:\/\/blog.prototypr.io\/this-aint-disney-a-practical-guide-to-css-transitions-and-animations-a8b87e7c5531",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-151",
						"title": "https:\/\/medium.com\/young-coder\/learning-to-code-by-hacking-minecraft-8c3da41e741a",
						"url": "https:\/\/medium.com\/young-coder\/learning-to-code-by-hacking-minecraft-8c3da41e741a",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-12",
				"title": "Reading List",
				"contents": [
					{
						"id": "link-91",
						"title": "The End Of Tourism | Wonderful Copenhagen",
						"url": "http:\/\/localhood.wonderfulcopenhagen.dk\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-24",
						"title": "Getting Started With Gutenberg By Creating Your Own Block \u2014 Smashing Magazine",
						"url": "https:\/\/www.smashingmagazine.com\/2018\/10\/gutenberg-testimonials-sliderblock\/",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-20",
				"title": "TP Platforms",
				"contents": [
					{
						"id": "link-352",
						"title": "Ahrefs Tools Login",
						"url": "https:\/\/app.ahrefs.com\/dashboard",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-334",
						"title": "Travel Portland Partner Portal",
						"url": "https:\/\/portland.extranet.simpleviewcrm.com\/login\/#\/login",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-335",
						"title": "Travel Portland Partner Portal (dev)",
						"url": "https:\/\/portland.extranet.crm-dev-1.simpleviewinc.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-244",
						"title": "Search TravelPortland.com",
						"url": "https:\/\/resources.travelportland.com\/search\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-250",
						"title": "Calendar Login - Travel Portland",
						"url": "https:\/\/event-admin.travelportland.com\/admin",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-47",
						"title": "BlueConic",
						"url": "https:\/\/travelportland.blueconic.net\/blueconic\/static\/index.html",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-37",
						"title": "Cloudflare",
						"url": "https:\/\/www.cloudflare.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-77",
						"title": "Coggle (mind maps)",
						"url": "https:\/\/coggle.it\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-48",
						"title": "Distribion",
						"url": "http:\/\/travelportland.dmplocal.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-38",
						"title": "GitHub",
						"url": "https:\/\/github.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-39",
						"title": "GoDaddy",
						"url": "http:\/\/www.godaddy.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-51",
						"title": "Issuu",
						"url": "http:\/\/issuu.com\/travelportland",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-40",
						"title": "JIRA",
						"url": "https:\/\/travelportland.atlassian.net\/secure\/Dashboard.jspa",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-128",
						"title": "Lucid Chart",
						"url": "https:\/\/www.lucidchart.com\/documents#docs?folder_id=home&browser=icon&sort=saved-desc",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-53",
						"title": "Mailchimp",
						"url": "https:\/\/mailchimp.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-54",
						"title": "OnceThere (Admin)",
						"url": "https:\/\/admin.oncethere.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-36",
						"title": "Pantheon Dashboard",
						"url": "https:\/\/dashboard.pantheon.io\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-56",
						"title": "Simpleview",
						"url": "http:\/\/portland.simpleviewcrm.com\/login",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-57",
						"title": "Travefy",
						"url": "https:\/\/travelportland.travefy.com\/account\/login",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-58",
						"title": "Visit Mobile",
						"url": "http:\/\/portland.visitmobile.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-94",
						"title": "WorkFlowy - Organize your brain.",
						"url": "https:\/\/workflowy.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-59",
						"title": "Zenfolio",
						"url": "http:\/\/travelportland.zenfolio.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-60",
						"title": "Zenfolio: PRinPDX",
						"url": "http:\/\/prinpdx.zenfolio.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-42",
						"title": "Atlassian support",
						"url": "https:\/\/support.atlassian.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-41",
						"title": "Atlassian account",
						"url": "https:\/\/my.atlassian.com\/",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-21",
				"title": "TP SoMe",
				"contents": [
					{
						"id": "link-64",
						"title": "LinkedIn",
						"url": "https:\/\/www.linkedin.com\/company\/portland-oregon-visitors-association",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-63",
						"title": "Instagram",
						"url": "http:\/\/instagram.com\/travelportland\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-61",
						"title": "Facebook",
						"url": "https:\/\/www.facebook.com\/travelportland",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-62",
						"title": "Twitter @travelportland",
						"url": "https:\/\/twitter.com\/travelportland",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-19",
				"title": "TP Admin",
				"contents": [
					{
						"id": "link-43",
						"title": "ADP Workforce Now\u00ae",
						"url": "https:\/\/workforcenow.adp.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-44",
						"title": "CCER",
						"url": "https:\/\/www.wellsfargo.com\/com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-280",
						"title": "Quarterly Reports",
						"url": "https:\/\/travelportland.app.box.com\/folder\/117870431905?s=boarg34n3gbp707dc1f6d4wt7hsln6bl",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-278",
						"title": "USI",
						"url": "https:\/\/travelportland.ungerboeck.net\/prod\/app85.cshtml",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-279",
						"title": "My Business Provider (must be signed in as an authorized user",
						"url": "https:\/\/partnerdash.google.com\/mybusinessprovider#a=1886641799372511920&p=verification-tokens",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-238",
						"title": "Google DMO Knowledge Base (must be signed in as authorized user)",
						"url": "https:\/\/support.google.com\/streetview_trusted\/answer\/7661048?hl=en&authuser=4&ref_topic=7623484",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-10",
				"title": "Clothes",
				"contents": [
					{
						"id": "link-314",
						"title": "Men's Spruce Street Crew Socks",
						"url": "https:\/\/www.smartwool.com\/shop\/mens-spruce-street-crew-socks-sw003902?variationId=001",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-281",
						"title": "Merino Quantum II Long Sleeve Zip Hood Jacket | icebreaker",
						"url": "https:\/\/www.icebreaker.com\/en-us\/mens-sweaters\/merino-quantum-ii-long-sleeve-zip-hood-jacket\/104958.html?dwvar_104958_color=426",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-220",
						"title": "Mens Merino Anatomica Short Sleeve V&nbsp;Underwear Top| icebreaker",
						"url": "https:\/\/www.icebreaker.com\/en-us\/mens-underwear\/anatomica-short-sleeve-v\/103661_WS.html?dwvar_103661__WS_color=002",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-221",
						"title": "Mens Merino Anatomica Boxers&nbsp;Underwear| icebreaker",
						"url": "https:\/\/www.icebreaker.com\/en-us\/mens-underwear\/anatomica-boxers\/103029_WS.html?dwvar_103029__WS_color=431",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-201",
						"title": "https:\/\/www.icebreaker.com\/en-us\/mens-baselayers\/bodyfitzone-200-zone-long-sleeve-crewe\/104355.html?dwvar_104355_color=601",
						"url": "https:\/\/www.icebreaker.com\/en-us\/mens-baselayers\/bodyfitzone-200-zone-long-sleeve-crewe\/104355.html?dwvar_104355_color=601",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-182",
						"title": "home | Banana Republic",
						"url": "https:\/\/bananarepublic.gap.com\/browse\/product.do?pid=512317002&rrec=true&mlink=5050,12413545,brproduct2_rr_1&clink=12413545#pdp-page-content",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-198",
						"title": "Mens Merino 200 Oasis Long Sleeve Crewe Snap Head&nbsp;Thermal Base Layer Top| icebreaker",
						"url": "https:\/\/www.icebreaker.com\/en-us\/mens-baselayers\/merino-200-oasis-long-sleeve-crewe-snap-head\/104711.html?dwvar_104711_color=401",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-164",
						"title": "Burr\u2122 Jacket Lined in Men&#39;s Outerwear | K\u00dcHL Clothing",
						"url": "https:\/\/www.kuhl.com\/kuhl\/mens\/outerwear\/burr-jacket-lined\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-165",
						"title": "Lined Kollusion\u2122 in Men&#39;s Outerwear | K\u00dcHL Clothing",
						"url": "https:\/\/www.kuhl.com\/kuhl\/mens\/outerwear\/lined-kollusion\/",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-7",
				"title": "TP sites",
				"contents": [
					{
						"id": "link-230",
						"title": "Travel Portland Style Guide - Google Docs",
						"url": "https:\/\/docs.google.com\/document\/d\/1eyqoKVQHuC_sSSIiPduBTnFQWzVsAlMJw2g-gi3-Iqo\/edit?usp=sharing",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-33",
						"title": "TravelPortland.com",
						"url": "http:\/\/meetings.travelportland.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-32",
						"title": "meetings.",
						"url": "http:\/\/www.travelportland.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-52",
						"title": "Localist",
						"url": "https:\/\/calendar.travelportland.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-55",
						"title": "OnceThere (Tours)",
						"url": "https:\/\/travelportland.oncethere.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-34",
						"title": "Travel Portland hosted Microsites",
						"url": "http:\/\/micro.travelportland.com\/",
						"display": true,
						"dataType": "link"
					},
					{
						"id": "link-35",
						"title": "Visitors Development Fund",
						"url": "http:\/\/visitorsdevelopmentfund.com\/",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-6",
				"title": "MTG",
				"contents": [
					{
						"id": "link-5",
						"title": "What's in Standard?",
						"url": "https:\/\/whatsinstandard.com\/",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-13",
				"title": "Wishlist",
				"contents": [],
				"display": true,
				"dataType": "set"
			},
			{
				"id": "set-23",
				"title": "Career Development",
				"contents": [
					{
						"id": "link-71",
						"title": "High-Impact Leadership Program | UC Berkeley",
						"url": "https:\/\/executive.berkeley.edu\/programs\/high-impact-leadership",
						"display": true,
						"dataType": "link"
					}
				],
				"display": true,
				"dataType": "set"
			}
		],
		"display": true,
		"dataType": "group"
	}
]`);
*/
