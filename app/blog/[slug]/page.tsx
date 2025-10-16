import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

// Mock blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "N's Wellness Diary – My Journey from Obese Teen to Wellness Coach",
    date: "October 16, 2025",
    slug: "journey-from-obese-teen-to-wellness-coach",
    thumbnail: "/blog/one_thumbnail.png",
    content: `
      <p>"From moot courts to workout floors, my journey has been far from ordinary. I was never a health-conscious person. In fact, I was an obese child and never considered myself a fitness enthusiast. I always believed fitness was never meant for kids like me. And yet, I loved myself just the way I was and was happy in my own skin."</p>
      
      <p>But everything changed when I turned 19. I started experiencing knee pain and was diagnosed with thyroid issues — a direct result of an unhealthy lifestyle. That was the wake-up call I needed. I realized I didn't want to spend my life dependent on medications. I wanted to take charge of my health and wellbeing.</p>
      
      <p>It was at this turning point that my cousin introduced me to a Breakfast and Fitness studio in Andheri. I took their 90-day challenge seriously, and the results were life-changing. I lost 10 kgs of body fat, gained confidence, and experienced a deep sense of self-satisfaction. But the benefits went beyond weight loss — my lifestyle improvements helped me overcome lifestyle-related health issues and gave me a newfound energy and focus.</p>
      
      <p>During this time, I was in my 2nd year of LLB, but I realized my true calling lay in helping others achieve the same transformation. I started coaching people part-time, guiding them with the right workouts and nutrition.</p>
      
      <p>Today, I feel immensely grateful. After completing my LLB, I chose wellness as my full-time path and feel truly satisfied to have helped over 200 people transform their lives — not just physically, but mentally and emotionally as well. My approach combines HIIT, Yoga, Zumba, and mindful nutrition, creating holistic transformations that empower people to lead healthier, happier lives.</p>
      
      <p>"Wellness is a journey, not a destination. If I can make this change, so can you. Start small, stay consistent, and remember — your body and mind are capable of far more than you think."</p>
    `,
  },
  {
    id: 2,
    title: "Start Small, Stay Consistent: My Guide to Begin Your Wellness Journey",
    date: "October 18, 2025",
    slug: "start-small-stay-consistent",
    thumbnail: "/blog/two_thumbnail.png",
    content: `
      <p>"After I shared my own transformation, one question I get all the time is — 'Where do I start?'
      And my answer is always the same: start small, stay consistent, and trust the process."</p>

      <p>I know how overwhelming it can feel when you decide to make a change. You might scroll through fitness videos, diets, and challenges, wondering what's right for you. But the truth is — you don't need to do everything at once. Wellness begins with one simple step, taken with intention.</p>

      <p>Here's how you can begin your journey today 🌿</p>


      <h2 class="text-2xl font-bold text-primary-green mb-3">1️⃣ Start with a Simple Morning Routine</h2>

      <p>The first thing you do after waking up sets the tone for your entire day.
      Begin by hydrating — have a glass of water or warm lemon water. 
      Add a few minutes of movement — maybe gentle stretches, a short yoga flow, or even a quick walk.</p>

      <p>If you're like me, a healthy breakfast makes all the difference. I personally start my day with a Herbalife shake, which keeps me full, energized, and ready to move.</p>


      <h2 class="text-2xl font-bold text-primary-green mb-3">2️⃣ Focus on Nutrition, Not Restriction</h2>

      <p>Forget fad diets and complicated meal plans.
      Wellness is about nourishing your body, not punishing it.
      Include more whole foods — fruits, vegetables, and lean proteins — and reduce processed foods gradually.
      Start by improving one meal a day. Small swaps make big changes over time.</p>

      <div class=""></div>

      <h2 class="text-2xl font-bold text-primary-green mb-3">3️⃣ Move Every Day</h2>

      <p>Movement is medicine.
      Whether it's Yoga, Zumba, or HIIT, find an activity that makes you happy.
      It doesn't have to be an intense 1-hour session; even 30 minutes of consistent movement is enough to see change — both physically and mentally.</p>

      <div class=""></div>

      <h2 class="text-2xl font-bold text-primary-green mb-3">4️⃣ Prioritize Rest & Hydration</h2>

      <p>Your body needs recovery as much as effort.
      Aim for 7–8 hours of sleep, and keep your hydration levels up through the day.
      Your energy, skin, and mood will thank you.</p>

      <div class=""></div>

      <h2 class="text-2xl font-bold text-primary-green mb-3">5️⃣ Stay Consistent & Kind to Yourself</h2>

      <p>The real secret to transformation isn't speed — it's consistency.
      There will be days you feel motivated, and others when you don't — and that's okay.
      What matters is showing up for yourself, even in small ways.</p>

      <div class=""></div>

      <p class="text-xl text-primary-green font-semibold my-4">"Wellness is not about doing everything perfectly.
      It's about doing something mindfully, every single day."</p>

      <p>If you're just starting out, I hope these steps help you take that first leap.
      Remember, I've been exactly where you are — and if I can do it, so can you. 🌿</p>

      <p>Follow @houseofwellnessbyn for more daily tips, motivation, and real stories of transformation.</p>
    `,
  },
  {
    id: 3,
    title: "5 Effective Ways to Improve Gut Health Naturally",
    date: "October 20, 2025",
    slug: "improve-gut-health-naturally",
    thumbnail: "/blog/three_thumbnail.png", 
    content: `
      <p class="text-xl text-primary-green font-semibold">🌱 Introduction</p>

      <p>Your gut does so much more than just digest food — it affects your mood, energy, immunity, and even your skin.
      When your gut is happy, everything else falls into place — better digestion, clearer skin, lighter mood, and more energy through the day.</p>

      <p>Here are five simple, natural ways to keep your gut strong and balanced — no complicated routines, just small habits that truly work.</p>

      <div class="my-6"></div>

      <h2 class="text-2xl font-bold text-primary-green mb-3">🥛 1. Add Fermented Foods to Your Meals</h2>

      <p>Fermented foods are your gut's best friends! They're full of probiotics — those "good" bacteria that help with digestion and reduce bloating.
      Try including curd, buttermilk, homemade pickles, or fermented batters like dosa and idli.
      These traditional foods have been part of our culture for a reason — they naturally support your gut health without needing anything fancy.</p>

      <div class="my-6"></div>

      <h2 class="text-2xl font-bold text-primary-green mb-3">🥗 2. Fill Your Plate with Fiber</h2>

      <p>Fiber keeps your digestion smooth and feeds your healthy gut bacteria.
      Think of colorful fruits, veggies, oats, whole grains, and lentils — your gut thrives on variety.
      A simple rule? The more natural colors on your plate, the happier your gut will be! 🌈</p>

      <div class="my-6"></div>

      <h2 class="text-2xl font-bold text-primary-green mb-3">🧘‍♀️ 3. Manage Stress (Your Gut Feels It Too!)</h2>

      <p>It's true — your gut and your mind talk to each other constantly.
      When you're stressed, your digestion slows down. That's why calming your mind helps your gut, too.
      Take a few minutes every day to breathe deeply, meditate, or just sit in silence.
      Even 10 mindful minutes can make a real difference.</p>

      <div class="my-6"></div>

      <h2 class="text-2xl font-bold text-primary-green mb-3">🚶‍♀️ 4. Move a Little Every Day</h2>

      <p>Movement is magic for your gut! You don't need to hit the gym or do anything extreme.
      A 30-minute walk, yoga session, Zumba class, or even light stretching can keep your digestion active and your metabolism balanced.
      Just stay consistent — your gut loves routine.</p>

      <div class="my-6"></div>

      <h2 class="text-2xl font-bold text-primary-green mb-3">💊 5. Include Natural Prebiotics</h2>

      <p>Prebiotics act like food for your good gut bacteria — helping them grow and thrive.
      You'll find them naturally in garlic, onions, bananas, and oats.
      And if your diet needs a little extra support, you can also add a good prebiotic supplement.
      When prebiotics and probiotics work together, your gut stays strong, balanced, and happy.</p>

      <div class="my-6"></div>

      <p class="text-xl text-primary-green font-semibold">🌸 Final Note</p>

      <p>Caring for your gut is one of the best things you can do for your overall wellness.
      Start small — eat real food, move daily, and make time to relax.
      You'll start feeling lighter, more energized, and more in tune with your body.</p>

      <p class="text-xl font-semibold mt-6">✨ Don't just read about a healthy gut — experience it.
      Join my 14-Day Gut Health Challenge and give your body the fresh start it deserves!
      💫 Tap below to get started — your gut will thank you!</p>
    `,
  },
];

function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen font-inter-display bg-soft-beige">
      <Header />
      <main className="pt-20 pb-20 md:pt-40 md:pb-40">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-6">
            <Link 
              href="/blog" 
              className="text-primary-green hover:underline inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all blogs
            </Link>
          </div>

          <article className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="relative h-80 w-full  ">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-contain  bg-[#F7F3EB]"
              />
            </div>
            
            <div className="p-6 md:p-10">
              <div className="text-sm text-muted-grey mb-3">{post.date}</div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-green mb-6">
                {post.title}
              </h1>
              
              <div 
                className="prose prose-lg max-w-none text-dark-text blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
