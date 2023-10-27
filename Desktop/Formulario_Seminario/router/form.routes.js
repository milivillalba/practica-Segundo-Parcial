import { Router } from "express";
import { SysForm01CabEncuestaModel } from "../models/Encuesta.js";
import { SysForm02CabLocalidadModel } from "../models/Localidad.js";
import { SysForm03CabNivelEstudioModel } from "../models/NivelStudio.js";
import { SysForm04CabGeneroModel } from "../models/Genero.js";
export const router = Router();

router.get("/", (req, res) => {
  res.render("Formulario");
});

// Ruta para manejar el envío del formulario
router.get("/", async (req, res) => {
  const localidades = await SysForm02CabLocalidadModel.findAll();
  const nivelesEstudio = await SysForm03CabNivelEstudioModel.findAll();
  const generos = await SysForm04CabGeneroModel.findAll();
  res.render("Formulario", {
    localidades,
    nivelesEstudio,
    generos,
  });
});

// Ruta para manejar el envío del formulario
router.post("/guardar_respuestas", async (req, res) => {
  try {
    const {
      edad,
      localidad,
      genero,
      nivelEstudio,
      momentoDia,
      generoMusicalPref,
      idiomaMusica,
      incluirMusicaLocal,
      artistaFavorito,
      bandaFavorita,
    } = req.body;

    // Crea una nueva entrada en la tabla sys_form_01_cab_encuesta
    const encuesta = await SysForm01CabEncuestaModel.create({
      edad,
      localidad,
      genero,
      nivelEstudio,
      momentoDia,
      generoMusicalPref,
      idiomaMusica,
      incluirMusicaLocal,
      artistaFavorito,
      bandaFavorita,
    });

    res.redirect("/exito"); // Puedes redirigir a una página de éxito
  } catch (error) {
    console.error("Error al guardar las respuestas:", error);
    res.redirect("/error"); // Puedes redirigir a una página de error en caso de fallo
  }
});
