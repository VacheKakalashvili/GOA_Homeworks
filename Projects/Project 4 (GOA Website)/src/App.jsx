import React from "react";

const App = () => {
  return (
    <div className="min-h-screen"> {/* Ensures the app takes at least the full viewport height */}

      {/* Navigation Section */}
      <nav className="text-white p-4 flex flex-col items-center">
        <div className="flex items-center justify-between w-full px-4">
          <img src="./src/components/Logo.jpg" className="w-16 h-16 rounded-full object-cover m-1" alt="GOA Logo" />
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-500 text-center flex-1">Welcome to Goal Oriented Academy</h1> {/* Adjusted for responsive font size */}
        </div>

        {/* Academy Images */}
        <div className="mt-4 flex flex-col items-center">
          <img src="./src/components/Goa.png" className="w-[260px] h-auto sm:w-[300px]" alt="GOA Banner" />
          <img src="./src/components/lesson.png" className="w-[600px] sm:w-[500px] md:w-[600px]" alt="Lesson Image" />
        </div>
      </nav>

      {/* About Section */}
      <div className="p-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-600">About GOA</h1>
        <div className="flex flex-col sm:flex-row justify-center mt-20 space-y-8 sm:space-y-0 sm:space-x-8"> {/* Stack on small screens, horizontal layout on medium screens */}

          {/* Card 1 - Coding Languages */}
          <div className="w-full sm:w-80 md:w-85 h-auto border-4 border-green-500 bg-white rounded-lg flex flex-col items-center justify-start p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
            <img src="./src/components/languages.png" className="w-32 sm:w-44 h-auto" alt="Coding Languages" />
            <p className="text-green-600 p-6">Goal Oriented Academy-ში ჩვენ ვასწავლით სხვადასხვა კოდირების ენებს, რათა დაგეხმაროთ გახდეთ მრავალმხრივი დეველოპერი. მიუხედავად იმისა, დაინტერესებული ხართ დინამიური ვებსაიტების შექმნით, მძლავრი back-end სისტემების შემუშავებით ან მონაცემთა მეცნიერებაში ჩაძირვით, ჩვენ გვაქვს სწორი ინსტრუმენტები და ენები, რათა დაგაყენოთ წარმატების გზაზე.</p>
            <p className="text-green-600 p-6">At Goal Oriented Academy, we teach a variety of coding languages to help you become a versatile developer. Whether you're interested in building dynamic websites, crafting powerful back-end systems, or diving into data science, we have the right tools and languages to set you on the path to success.</p>
          </div>

          {/* Card 2 - Graphic Design */}
          <div className="w-full sm:w-80 md:w-85 h-auto border-4 border-green-500 rounded-lg flex flex-col items-center justify-start p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
            <img src="./src/components/graphic.png" className="w-32 sm:w-44 h-auto" alt="Graphic Design" />
            <p className="text-green-600 p-6">Goal Oriented Academy-ში ჩვენ ვასწავლით გრაფიკული დიზაინის ტექნიკისა და ხელსაწყოების ფართო სპექტრს, რათა დაგეხმაროთ თქვენი შემოქმედებითი პოტენციალის გახსნაში. მიუხედავად იმისა, გაინტერესებთ განსაცვიფრებელი ვიზუალის შექმნა, მომხმარებლისთვის მოსახერხებელი ინტერფეისის დიზაინი ან ბრენდინგის დაუფლება, ჩვენი სასწავლო გეგმა გაწვდით უნარებს, რათა განვითარდეთ დიზაინის სამყაროში.</p>
            <p className="text-green-600 p-6">At Goal Oriented Academy, we teach a wide range of graphic design techniques and tools to help you unlock your creative potential. Whether you're interested in creating stunning visuals, designing user-friendly interfaces, or mastering branding, our curriculum equips you with the skills to thrive in the world of design.</p>
          </div>

          {/* Card 3 - Algorithms and AI */}
          <div className="w-full sm:w-80 md:w-85 h-auto border-4 border-green-500 rounded-lg flex flex-col items-center justify-start p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
            <img src="./src/components/algorithms.png" className="w-32 sm:w-44 h-auto" alt="Algorithms & AI" />
            <p className="text-green-600 p-6">Goal Oriented Academy-ში ჩვენ გთავაზობთ სიღრმისეულ კურსებს ალგორითმებისა და ხელოვნური ინტელექტის შესახებ, რათა გააუმჯობესოთ თქვენი პრობლემების გადაჭრის და ტექნიკური უნარები. ალგორითმების საფუძვლების გაგებიდან დაწყებული ხელოვნური ინტელექტის უახლესი მოდელების დანერგვამდე, ჩვენი სასწავლო გეგმა ამზადებს თქვენ ინოვაციებისთვის და მოწინავე ტექნოლოგიებით რეალურ სამყაროში არსებულ გამოწვევებთან გამკლავებისთვის.</p>
            <p className="text-green-600">At Goal Oriented Academy, we offer in-depth courses on Algorithms and Artificial Intelligence to sharpen your problem-solving and technical skills. From understanding the fundamentals of algorithms to implementing cutting-edge AI models, our curriculum prepares you to innovate and tackle real-world challenges with advanced technology.</p>
          </div>

          {/* Card 4 - MMA */}
          <div className="w-full sm:w-80 md:w-85 h-auto border-4 border-green-500 rounded-lg flex flex-col items-center justify-start p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
            <img src="./src/components/mma.png" className="w-32 sm:w-44 h-auto" alt="MMA Training" />
            <p className="text-green-600 p-6">Goal Oriented Academy-ში ჩვენ გთავაზობთ ყოვლისმომცველ ვარჯიშს შერეულ საბრძოლო ხელოვნებაში (MMA), რომელიც აერთიანებს ფიზიკურ კონდიცირებას ტექნიკურ გამოცდილებასთან. თუ თქვენ ცდილობთ გააუმჯობესოთ თქვენი ფიტნესი, ისწავლოთ თავდაცვისუნარიანობა ან განაგრძოთ კონკურენტული MMA, ჩვენი აკადემია გთავაზობს ხელმძღვანელობასა და მხარდაჭერას, რათა დაგეხმაროთ თქვენი სრული პოტენციალის მიღწევაში რინგზე და მის გარეთ.</p>
            <p className="text-green-600">At Goal Oriented Academy, we offer comprehensive training in Mixed Martial Arts (MMA), blending physical conditioning with technical expertise. Whether you're looking to improve your fitness, learn self-defense, or pursue competitive MMA, our academy provides the guidance and support to help you reach your full potential inside and outside the ring.</p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="flex flex-wrap justify-center mt-10 gap-10 px-5 md:px-10">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <p className="text-green-600">აკადემიაში სწავლა მიმდინარეობს ონლაინ:</p>
          <ul className="list-disc pl-5 text-green-600">
            <li>კვირაში მაქსიმუმ 4-ჯერ, მინიმუმ 1-ჯერ</li>
          </ul>
          <p className="text-green-600">The academy offers online learning:</p>
          <ul className="list-disc pl-5 text-green-600">
            <li>Maximum 4 times a week, Minimum 1 time a week</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4">
          <ul className="list-disc pl-5 text-green-600">
            <li>აკადემიის ბავშვები სხვადასხვა შეხვედრებზე ერთმანეთს ხვდებიან გაცნობის მიზნით</li>
          </ul>
          <ul className="list-disc pl-5 text-green-600">
            <li>Academy children meet at various meetings to get to know each other.</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4">
          <ul className="list-disc pl-5 text-green-600">
            <li>აკადემია სემესტრულად ატარებს ტესტირებებს ე.წ. Hackathon-ებს</li>
            <li>The Academy conducts so-called Hackathons every semester.</li>
          </ul>
        </div>
      </div>


      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-green-400 to-green-600 p-6 mt-10 shadow-md">
        <h1 className="text-3xl sm:text-4xl font-bold text-black text-center">Contact Us</h1>
        <p className="mt-4 text-lg text-black text-center">Email: <a href="mailto:contact@goa.com" className="underline">goalorientadze@goa.com</a></p>
        <div className="mt-4 text-center">
          <a href="https://www.facebook.com/nika11keshelava" className="text-black mx-2">Facebook Page</a>
          <span className="text-black">|</span>
          <a href="https://www.youtube.com/channel/UCRjoMwrWoD8_KNioRwWlq8g" className="text-black mx-2">Youtube Channel</a>
        </div>
      </footer>
    </div>
  );
};

export default App;