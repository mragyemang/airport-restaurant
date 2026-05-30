import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";

export default function Menu() {
  const menuCategories = [
    {
      id: "starters",
      label: "Starters",
      items: [
        { name: "Terminal Truffle Fries", desc: "Crispy shoestring fries dusted with parmesan and white truffle oil.", price: "$14" },
        { name: "Departure Dumplings", desc: "Pan-fried pork and chive dumplings with black vinegar dip.", price: "$16" },
        { name: "Ahi Tuna Tartare", desc: "Avocado, sesame soy dressing, served with crispy wonton chips.", price: "$22" },
        { name: "Burrata & Heirloom Tomato", desc: "Balsamic glaze, basil pesto, grilled sourdough.", price: "$19" }
      ]
    },
    {
      id: "mains",
      label: "Main Course",
      items: [
        { name: "First Class Filet Mignon", desc: "Aged 28 days, served with truffle mash and asparagus.", price: "$65" },
        { name: "Runway Sea Bass", desc: "Pan-seared Chilean sea bass with a miso glaze and bok choy.", price: "$48" },
        { name: "Layover Lobster Ravioli", desc: "House-made pasta, Maine lobster, creamy bisque sauce.", price: "$38" },
        { name: "The Aviator Burger", desc: "Wagyu beef, caramelized onions, gruyere, brioche bun, fries.", price: "$28" },
        { name: "Roasted Airline Chicken", desc: "Herb roasted chicken breast, wild mushroom risotto.", price: "$32" }
      ]
    },
    {
      id: "desserts",
      label: "Desserts",
      items: [
        { name: "Cloud Nine Cheesecake", desc: "New York style cheesecake with a mixed berry compote.", price: "$12" },
        { name: "Chocolate Lava Flight", desc: "Warm chocolate cake with molten center, vanilla bean ice cream.", price: "$14" },
        { name: "Takeoff Tiramisu", desc: "Classic Italian layered dessert with espresso and mascarpone.", price: "$13" }
      ]
    },
    {
      id: "drinks",
      label: "Drinks",
      items: [
        { name: "Lounge Signature Cocktail", desc: "Aviation gin, maraschino, crème de violette, and lemon.", price: "$18" },
        { name: "The Red Eye", desc: "Espresso martini with premium vodka and cold brew.", price: "$16" },
        { name: "Turbulence Margarita", desc: "Spicy jalapeño infused tequila, fresh lime, agave.", price: "$17" },
        { name: "Non-Stop IPA", desc: "Locally brewed craft IPA.", price: "$9" },
        { name: "First Class Cabernet", desc: "Napa Valley Cabernet Sauvignon, by the glass.", price: "$22" }
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-background pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
            Our <span className="text-primary">Menu</span>
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience our curated selection of dishes, crafted with the finest ingredients to elevate your pre-flight dining.
          </p>
        </div>

        <Tabs defaultValue="starters" className="w-full">
          <TabsList className="w-full justify-start md:justify-center p-1 bg-white/5 border border-white/10 rounded-full mb-12 overflow-x-auto flex flex-nowrap hide-scrollbar">
            {menuCategories.map((cat) => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="rounded-full px-6 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-w-[120px]"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <Card key={index} className="glass-card border-none hover:-translate-y-1 transition-transform duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <h3 className="text-xl font-bold text-white">{item.name}</h3>
                        <span className="text-xl font-bold text-primary shrink-0">{item.price}</span>
                      </div>
                      <div className="w-full h-px bg-white/10 mb-4 dashed-border"></div>
                      <p className="text-gray-400">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-20 text-center glass p-8 rounded-2xl max-w-3xl mx-auto">
          <h1 className="text-gray-400 text-xl underline mb-3" >NOTICE</h1>
          <p className="text-gray-400 italic">
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
            Please inform your server of any dietary restrictions or allergies.
          </p>
        </div>
      </div>
    </div>
  );
}
