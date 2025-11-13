type Role = "student" | "admin" | "teacher";

export function canAccessRole(role: Role) {
    return role !== "student";
}