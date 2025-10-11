interface SiteConfig {
    id: string | number,
    name: string,
    path: string
}
export const siteConfig : SiteConfig[] = [
  { "id": 1, "name": "Explore", "path": "/explore" },
  { "id": 2, "name": "Problems", "path": "/problems" },
  { "id": 33, "name": "Track Progress", "path": "/progress" },
  { "id": 10, "name": "Building", "path": "/dev" },
  { "id": 3, "name": "Contest", "path": "/contest" },
  { "id": 5, "name": "Interview", "path": "/interview" },
  { "id": 4, "name": "Discuss", "path": "/discuss" },
]


interface SiteConfigWithoutAuth {
    id: string | number,
    name: string,
    path: string
}
export const siteConfigWithoutAuth : SiteConfigWithoutAuth[] = [
  { "id": 1, "name": "Platform", "path": "/platform" },
  { "id": 2, "name": "Explore", "path": "/explore" },
  { "id": 3, "name": "Register", "path": "/register" },
  { "id": 4, "name": "Login", "path": "/login" }
]

interface PlatfromForWhichConfig {
  id: string | number
  forWhich: string
  heading: string
  description: string
}

export const platfromForWhichConfig: PlatfromForWhichConfig[] = [
  {
    "id": 1,
    "forWhich": "Students",
    "heading": "Learn by Solving Real Problems",
    "description": "Sharpen your problem-solving and coding skills by tackling interactive challenges designed specifically for students. Each task strengthens your understanding of programming concepts, algorithms, and logical thinking while preparing you for real-world scenarios and competitions."
  },
  {
    "id": 2,
    "forWhich": "Tech Enthusiasts",
    "heading": "Challenge Yourself and Grow",
    "description": "For tech enthusiasts who love experimenting with code, our platform provides exciting problem sets that push your boundaries. Explore different algorithms, optimize solutions, and gain hands-on experience in a variety of programming paradigms."
  },
  {
    "id": 3,
    "forWhich": "Developers",
    "heading": "Refine Your Coding Expertise",
    "description": "Professional developers can enhance their skill set by tackling curated algorithm and data structure problems. Strengthen your logic, learn new optimization techniques, and stay sharp for interviews, hackathons, or professional coding projects."
  },
  {
    "id": 4,
    "forWhich": "Problem Solvers",
    "heading": "Test Your Logical Thinking",
    "description": "Problem solvers can dive into challenging coding exercises that require creativity and critical thinking. Solve algorithmic puzzles, identify edge cases, and apply efficient solutions to complex problems to keep your mind sharp and agile."
  },
  {
    "id": 5,
    "forWhich": "Beginners",
    "heading": "Start Your Coding Journey",
    "description": "New to programming? Begin with simple, guided coding problems that introduce you to basic concepts, algorithms, and problem-solving techniques. Learn at your own pace and gradually progress to more challenging exercises."
  }
]




interface FAQ_Config {
    id: string,
    question: string,
    description: string
}
export const FaqConfig: FAQ_Config[]= [
  {
    id: '1',
    question: "What is the main purpose of this platform?",
    description:
      "Our platform is designed to simplify and streamline the daily operations of startups, small businesses, and scaling enterprises. It combines multiple essential tools into one dashboard, helping you manage projects, teams, customer engagement, and analytics without needing to juggle between multiple applications."
  },
  {
    id: '2',
    question: "Do I need any technical skills to get started?",
    description:
      "No technical expertise is required to start using our platform. We have built it with a user-friendly interface that makes setup and navigation effortless. Even if you have zero coding knowledge, you can customize workflows, automate processes, and manage all aspects of your business with confidence."
  },
  {
    id: '3',
    question: "Can I integrate this with my existing tools?",
    description:
      "Yes, our platform supports seamless integration with a variety of popular tools including Slack, Google Workspace, Zoom, Stripe, and more. These integrations allow you to maintain your existing workflows while benefiting from our advanced features, ultimately improving your productivity and team collaboration."
  },
  {
    id: '4',
    question: "Is my data secure on this platform?",
    description:
      "Security is our top priority. We use enterprise-grade encryption, secure cloud infrastructure, two-factor authentication, and regular vulnerability assessments to protect your information. Your business and customer data remain fully encrypted, accessible only to authorized personnel, ensuring you can operate with complete peace of mind."
  },
  {
    id: '5',
    question: "Do you offer customer support?",
    description:
      "Yes, we provide round-the-clock customer support through live chat, email, and phone. Our highly trained team is always ready to assist with technical issues, feature guidance, and account management, ensuring that you never feel stuck or unsupported at any stage of your journey."
  },
  {
    id: '6',
    question: "What pricing plans do you offer?",
    description:
      "We offer flexible pricing plans tailored to businesses of all sizes. From a free plan for individuals and early-stage startups to premium enterprise packages with advanced features, you can choose a plan that fits your growth stage, operational needs, and financial capacity without any compromises."
  },
  {
    id: '7',
    question: "Can I upgrade or downgrade my plan anytime?",
    description:
      "Absolutely. You have complete flexibility to change your subscription plan at any time, based on your business growth or budget changes. The transition process is smooth, with no downtime, no hidden fees, and no risk of losing your stored data or project history."
  },
]