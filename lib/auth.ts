// Mock authentication system - replace with real auth when database is connected
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  headline?: string
  profileImage?: string
  location?: string
}

// Mock users for development
const mockUsers: User[] = [
  {
    id: "1",
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    headline: "Software Engineer at Tech Corp",
    profileImage: "/professional-headshot.png",
    location: "San Francisco, CA",
  },
  {
    id: "2",
    email: "jane.smith@example.com",
    firstName: "Jane",
    lastName: "Smith",
    headline: "Product Manager | AI Enthusiast",
    profileImage: "/professional-woman-headshot.png",
    location: "New York, NY",
  },
]

export const mockAuth = {
  login: async (email: string, password: string): Promise<User | null> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const user = mockUsers.find((u) => u.email === email)
    if (user && password === "password") {
      localStorage.setItem("currentUser", JSON.stringify(user))
      return user
    }
    return null
  },

  signup: async (email: string, password: string, firstName: string, lastName: string): Promise<User | null> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser: User = {
      id: Date.now().toString(),
      email,
      firstName,
      lastName,
      headline: "Professional",
    }

    localStorage.setItem("currentUser", JSON.stringify(newUser))
    return newUser
  },

  logout: () => {
    localStorage.removeItem("currentUser")
  },

  getCurrentUser: (): User | null => {
    if (typeof window === "undefined") return null
    const stored = localStorage.getItem("currentUser")
    return stored ? JSON.parse(stored) : null
  },
}
