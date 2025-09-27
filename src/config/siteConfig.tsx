interface SiteConfig {
    id: string | number,
    name: string,
    path: string
}
export const siteConfig : SiteConfig[] = [
  { "id": 1, "name": "Explore", "path": "/explore" },
  { "id": 2, "name": "Problems", "path": "/problems" },
  { "id": 3, "name": "Contest", "path": "/contest" },
  { "id": 4, "name": "Discuss", "path": "/discuss" },
  { "id": 5, "name": "Interview", "path": "/interview" },
  { "id": 6, "name": "Store", "path": "/store" }
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