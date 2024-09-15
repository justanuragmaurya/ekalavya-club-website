import { Button } from "@/components/ui/button";
import { Mail, Instagram } from 'lucide-react';
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

export default function Home() {
  // const events = [
  //   { title: "Tech Workshop", date: "April 15, 2024", time: "2:00 PM - 4:00 PM" },
  //   { title: "Hackathon", date: "May 1-3, 2024", time: "48-hour event" },
  //   { title: "Guest Lecture", date: "May 20, 2024", time: "6:00 PM - 7:30 PM" },
  // ];

  const teamMembers = [
    { name: "First Name ", role: "President", image: "/avatar.jpg" },
    { name: "Second Name", role: "Vice President", image: "/avatar.jpg" },
    { name: "Third Name", role: "Financial head ", image: "/avatar.jpg" },
    { name: "Fourth Name", role: "Technical Lead", image: "/avatar.jpg" },
  ];

  return (
    <>
      <div className="flex justify-center items-center h-[calc(100vh-64px)] bg-gradient-to-tl from-[#1a1208] to-[#361f00]">
        <div className="flex flex-col items-center justify-center text-neutral-200">
        <BlurFade delay={0.25} inView className="flex flex-col items-center justify-center">
          <p className="text-4xl pt-3 tracking-wide sm:text-7xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-[#e0cc92] to-[#8d6531] mb-3">
            Eklavya
          </p>
          <p className="sm:text-xl text-lg bg-clip-text text-transparent font-bold bg-gradient-to-b from-neutral-200 to-neutral-400 ">अंतः अस्ति प्रारंभ</p>
          </BlurFade>
          <BlurFade delay={0.50} inView className="flex flex-col items-center justify-center">
          <p className="text-neutral-200 text-center max-w-2xl mx-auto opacity-70 mt-5">
            Eklavya is a student organization dedicated to fostering learning, innovation, and collaboration. We organize workshops, hackathons, and networking events to help students grow their skills and connect with industry professionals.
          </p>
          <Link href="/join"><Button className="bg-[#e0cc92] text-black hover:bg-transparent hover:text-[#e0cc92] border border-[#e0cc92] mt-5">
            Join Us
          </Button></Link>
          </BlurFade>
        </div>
      </div>
      {/* about us */}
      <section id="about" className="py-32 bg-[#150f00]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[#e0cc92] to-[#8d6531]">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-neutral-300 mb-6">
              Eklavya is a dynamic student organization at our university, dedicated to empowering students in the field of technology and innovation. Our mission is to create a vibrant community where students can learn, grow, and collaborate on exciting projects.
            </p>
            <p className="text-neutral-300">
              Through our workshops, hackathons, and networking events, we aim to bridge the gap between academic learning and real-world applications. Join us in our journey to explore cutting-edge technologies, develop new skills, and make lasting connections in the tech world.
            </p>
          </div>
        </div>
      </section>
      
      {/* upcoming events */}
      <section id="events" className="py-32 bg-[#1a1208]">
        <div className="container mx-auto px-4 m-5">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[#e0cc92] to-[#8d6531]">
            Upcoming Events
          </h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-[#1a1208] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#e0cc92] mb-2">{event.title}</h3>
              <p className="text-neutral-300">{event.date}</p>
              <p className="text-neutral-400">{event.time}</p>
            </div>
          ))}
        </div> */}
          <p className="text-[#e0cc92] text-center text-2xl py-16"> -- coming soon  -- </p>
        </div>
      </section>
      
      {/* our team */}
      <section id="team" className="py-32 bg-[#150f00]">
        <div className="container mx-auto px-4 m-5">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[#e0cc92] to-[#8d6531]">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#e0cc92] mb-1">{member.name}</h3>
                <p className="text-neutral-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* contact us */}
      <section id="contact" className="py-16 bg-[#1a1208]">
        <div className="container mx-auto px-4 m-5">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[#e0cc92] to-[#8d6531]">
            Contact Us
          </h2>
          <div className="max-w-lg mx-auto text-center">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#e0cc92] mb-2">Get in Touch</h3>
              <p className="text-neutral-300">We&apos;d love to hear from you! Reach out to us through email or follow us on Instagram.</p>
            </div>
            <div className="flex justify-center items-center gap-5 m-5">
              <a href="mailto:eklavya.lpu@gmail.com" className="flex items-center text-neutral-200 hover:text-[#e0cc92] transition-colors">
                <Mail className="mr-2" size={20} />
                Mail Us
              </a>
              <a href="https://www.instagram.com/eklavya_lpu" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-200 hover:text-[#e0cc92] transition-colors">
                <Instagram className="mr-2" size={20} />
                @eklavya_lpu
              </a>
              {/* <a href="whatsapp" className=" flex gap-1 text-white text-md items-center">
                <Whatsapp />
                Join Our Group
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


function Whatsapp() {
  return (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 24 24" fill="white">
    <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
  </svg>)
}