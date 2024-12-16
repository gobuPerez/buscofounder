import { z } from "zod";

export const newPostSchema = z.object({
    publicName: z.string({required_error: "Campo obligatorio.", invalid_type_error: "Por favor, usa solo texto." })
        .trim()
        .min(1, { message: "Campo obligatorio." })
        .max(64, { message: "Este campo debe tener menos de 65 caracteres." }),
    problem: z.string({ invalid_type_error: "Por favor, utiliza solo texto." })
        .trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    vision: z.string({ invalid_type_error: "Por favor, utiliza solo texto." })
        .trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    aboutMe: z.string({ invalid_type_error: "Por favor, utiliza solo texto." })
        .trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    lookingFor: z.string({ invalid_type_error: "Por favor, utiliza solo texto." })
        .trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    offer: z.string({ invalid_type_error: "Por favor, utiliza solo texto." })
        .trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    team: z.string({ invalid_type_error: "Por favor, utiliza solo texto." })
        .trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    location: z.string({ invalid_type_error: "Por favor, utiliza solo texto." })
        .trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }), 
    projectPhase: z.string({ invalid_type_error: "Por favor, utiliza solo texto." })
        .trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    linkedin: z.union([
        z.literal(""),
        z.string({ invalid_type_error: "Por favor, utiliza solo texto." })
            .trim()
            .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." })
            .startsWith("https://www.linkedin.com/in/", { message: "Usa un enlace válido de Linkedin, de la forma: https://www.linkedin.com/in/tu-usuario"})
    ]),
    instagram: z.string({ invalid_type_error: "Por favor, utiliza solo texto." }).
        trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    twitter: z.string({ invalid_type_error: "Por favor, utiliza solo texto." })
        .trim()
        .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." }),
    contactEmail: z.union([
        z.literal(""),
        z.string({ invalid_type_error: "Por favor, utiliza solo texto." })
            .trim()
            .max(2048, { message: "Este campo debe tener menos de 2049 caracteres." })
            .email({ message: "Usa una dirección de email válida."})
    ]),
    showProfilePhoto: z.boolean()
});

export const newPostWhitIdAndPhoto = newPostSchema.extend({
    userId: z.string().min(1).max(1024),
    profilePhoto: z.string().min(1).max(1024).nullable()
});