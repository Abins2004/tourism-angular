import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { HomeComponent } from "./page/home/home.component";
import { StatesComponent } from "./ui/states/states.component";
import { CarouselComponent } from "./ui/carousel/carousel.component";
import { ContactComponent } from "./page/contact/contact.component";
import { AboutComponent } from "./page/about/about.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, StatesComponent, CarouselComponent, ContactComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  states = [
    { 
      id: 1, 
      name: 'Andhra Pradesh', 
      img: 'https://images.unsplash.com/photo-1679806143123-e02458c9b1d1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      description: 'Andhra Pradesh is known for its beautiful coastline along the Bay of Bengal, its rich cultural heritage, and famous temples like the Tirumala Venkateswara Temple.' 
    },
    { 
      id: 2, 
      name: 'Arunachal Pradesh', 
      img: 'https://images.unsplash.com/photo-1668437824006-1be44600774b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      description: 'Arunachal Pradesh is a northeastern state known for its stunning landscapes, pristine rivers, and tribal culture. It is home to the Tawang Monastery, one of the largest Buddhist monasteries in India.' 
    },
    { 
      id: 3, 
      name: 'Assam', 
      img: 'https://plus.unsplash.com/premium_photo-1661828159832-19d8340f8e09?q=80&w=864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      description: 'Assam is famous for its tea gardens, the Brahmaputra River, and rich wildlife like the one-horned rhinoceros at Kaziranga National Park.' 
    },
    { 
      id: 4, 
      name: 'Bihar', 
      img: 'https://images.unsplash.com/photo-1629561918009-339e516be72f?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      description: 'Bihar is known for its historical significance, with ancient sites like Nalanda University and the Buddhist pilgrimage site Bodh Gaya, where Buddha attained enlightenment.' 
    },
    { 
      id: 5, 
      name: 'Chhattisgarh', 
      img: 'https://plus.unsplash.com/premium_photo-1726786836056-79f08e0334fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhdHRpc2dhcmh8ZW58MHx8MHx8fDA%3D', 
      description: 'Chhattisgarh is rich in forests and mineral resources, with notable attractions like the Chitrakoot Falls and the ancient temples of Sirpur.' 
    },
    { 
      id: 6, 
      name: 'Goa', 
      img: 'https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww', 
      description: 'Goa is a popular beach destination known for its vibrant nightlife, Portuguese colonial architecture, and serene beaches like Anjuna and Baga.' 
    },
    { 
      id: 7, 
      name: 'Gujarat', 
      img: 'https://images.unsplash.com/photo-1620103142897-e759080cd49d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      description: 'Gujarat is famous for the Rann of Kutch, the Gir National Park, home to Asiatic lions, and the historic city of Ahmedabad.' 
    },
    { 
      id: 8, 
      name: 'Haryana', 
      img: 'https://images.unsplash.com/photo-1605469237567-a39930679526?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      description: 'Haryana is known for its rich agricultural lands, historical monuments, and being the birthplace of the ancient epic, the Mahabharata, in Kurukshetra.' 
    },
    { 
      id: 9, 
      name: 'Himachal Pradesh', 
      img: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      description: 'Himachal Pradesh is famous for its hill stations, snowy peaks, and scenic landscapes, including popular destinations like Manali, Shimla, and Dharamshala.' 
    },
    { 
      id: 10, 
      name: 'Jharkhand', 
      img: 'https://images.unsplash.com/photo-1653305436918-d2fa7f5b6b27?q=80&w=1014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      description: 'Jharkhand is known for its dense forests, waterfalls like the Hundru Falls, and its rich mineral deposits.' 
    },
    { 
      id: 11, 
      name: 'Karnataka', 
      img: 'https://plus.unsplash.com/premium_photo-1697730337612-8bd916249e30?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FybmF0YWthfGVufDB8fDB8fHww', 
      description: 'Karnataka is home to the historic city of Mysore, the IT hub of Bangalore, and ancient temples like those at Hampi and Badami.' 
    },
    { 
      id: 12, 
      name: 'Kerala', 
      img: 'https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8fDB8fHww', 
      description: 'Kerala is known for its backwaters, Ayurveda, scenic hill stations like Munnar, and beautiful beaches like Kovalam.' 
    },
    { 
      id: 13, 
      name: 'Madhya Pradesh', 
      img: 'https://images.unsplash.com/photo-1671375159250-8f81a29e54e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFkaHlhcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D', 
      description: 'Madhya Pradesh is home to the UNESCO World Heritage Sites of Khajuraho temples and the wildlife sanctuary of Kanha, famous for its tigers.' 
    },
    { 
      id: 14, 
      name: 'Maharashtra', 
      img: 'https://images.unsplash.com/photo-1705356395716-9357ed3156e9?q=80&w=974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      description: 'Maharashtra is famous for the iconic city of Mumbai, the Ajanta and Ellora caves, and the hill station of Lonavala.' 
    },
    { 
      id: 15, 
      name: 'Manipur', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Manipur_in_India_2020.svg', 
      description: 'Manipur is known for its beautiful lakes, rich tribal culture, and the iconic Imphal city.' 
    },
    { 
      id: 16, 
      name: 'Meghalaya', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Meghalaya_in_India_2020.svg', 
      description: 'Meghalaya, also known as the “Abode of Clouds,” is famous for its lush forests, living root bridges, and waterfalls like Nohkalikai.' 
    },
    { 
      id: 17, 
      name: 'Mizoram', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Mizoram_in_India_2020.svg', 
      description: 'Mizoram is known for its picturesque landscape, vibrant tribal culture, and attractions like the Murlen National Park.' 
    },
    { 
      id: 18, 
      name: 'Nagaland', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Nagaland_in_India_2020.svg', 
      description: 'Nagaland is famous for its unique culture, traditional dance forms, and the Hornbill Festival.' 
    },
    { 
      id: 19, 
      name: 'Odisha', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Odisha_in_India_2020.svg', 
      description: 'Odisha is known for its temples like the Jagannath Temple in Puri, the Sun Temple in Konark, and beautiful beaches like Gopalpur.' 
    },
    { 
      id: 20, 
      name: 'Punjab', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Punjab_in_India_2020.svg', 
      description: 'Punjab is known for its vibrant culture, rich history, the Golden Temple in Amritsar, and its contribution to Indian agriculture.' 
    },
    { 
      id: 21, 
      name: 'Rajasthan', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Rajasthan_in_India_2020.svg', 
      description: 'Rajasthan is famous for its royal palaces, forts, desert landscapes, and vibrant cities like Jaipur, Udaipur, and Jodhpur.' 
    },
    { 
      id: 22, 
      name: 'Sikkim', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sikkim_in_India_2020.svg', 
      description: 'Sikkim is known for its snow-capped mountains, monasteries, and as a gateway to the Kanchenjunga, the third-highest mountain in the world.' 
    },
    { 
      id: 23, 
      name: 'Tamil Nadu', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Tamil_Nadu_in_India_2020.svg', 
      description: 'Tamil Nadu is known for its Dravidian architecture, temples like Meenakshi Temple in Madurai, and the hill stations of Ooty and Kodaikanal.' 
    },
    { 
      id: 24, 
      name: 'Telangana', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Telangana_in_India_2020.svg', 
      description: 'Telangana, with its capital Hyderabad, is known for its rich history, cultural heritage, and landmarks like Charminar and Golconda Fort.' 
    },
    { 
      id: 25, 
      name: 'Tripura', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Tripura_in_India_2020.svg', 
      description: 'Tripura is famous for its royal heritage, temples, and natural beauty, with sites like Ujjayanta Palace and the Sepahijala Wildlife Sanctuary.' 
    },
    { 
      id: 26, 
      name: 'Uttar Pradesh', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Uttar_Pradesh_in_India_2020.svg', 
      description: 'Uttar Pradesh is home to the Taj Mahal, Varanasi, and significant pilgrimage sites like Ayodhya and Mathura.' 
    },
    { 
      id: 27, 
      name: 'Uttarakhand', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Uttarakhand_in_India_2020.svg', 
      description: 'Uttarakhand is known for its hill stations like Nainital, religious sites like Haridwar, and the famous Char Dham Yatra.' 
    },
    { 
      id: 28, 
      name: 'West Bengal', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/West_Bengal_in_India_2020.svg', 
      description: 'West Bengal is known for its cultural richness, historical landmarks like the Howrah Bridge, and the vibrant city of Kolkata.' 
    }
  ];

  
}
