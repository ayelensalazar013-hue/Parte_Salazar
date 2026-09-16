// REGISTROS GENÉRICOS ANÓNIMOS (SIN NOMBRES REALES FICTICIOS)
export const MODULES_DATA = {
  jardin_pub: {
    title: "Jardín Público",
    records: [
      {
        id: "LEG-JP-001",
        student: "Estudiante #101",
        doc: "54.XXX.890",
        status: "Regular"
      },
      {
        id: "LEG-JP-002",
        student: "Estudiante #102",
        doc: "55.XXX.112",
        status: "Regular"
      }
    ]
  },
  jardin_priv: {
    title: "Jardín Privado",
    records: [
      {
        id: "LEG-JPR-001",
        student: "Estudiante #201",
        doc: "53.XXX.002",
        status: "Regular"
      },
      {
        id: "LEG-JPR-002",
        student: "Estudiante #202",
        doc: "54.XXX.903",
        status: "Inasistencia"
      }
    ]
  },
  prim_pub: {
    title: "Primaria Pública",
    records: [
      {
        id: "LEG-PP-001",
        student: "Estudiante #301",
        doc: "48.XXX.334",
        status: "Regular"
      },
      {
        id: "LEG-PP-002",
        student: "Estudiante #302",
        doc: "47.XXX.123",
        status: "Regular"
      }
    ]
  },
  prim_priv: {
    title: "Primaria Privada",
    records: [
      {
        id: "LEG-PPR-001",
        student: "Estudiante #401",
        doc: "48.XXX.210",
        status: "Regular"
      },
      {
        id: "LEG-PPR-002",
        student: "Estudiante #402",
        doc: "49.XXX.998",
        status: "Pase en Trámite"
      }
    ]
  },
  sec_bach: {
    title: "Secundaria Bachiller",
    records: [
      {
        id: "LEG-SB-001",
        student: "Estudiante #501",
        doc: "44.XXX.654",
        status: "Regular"
      },
      {
        id: "LEG-SB-002",
        student: "Estudiante #502",
        doc: "45.XXX.876",
        status: "Regular"
      }
    ]
  },
  sec_tec: {
    title: "Secundaria Técnica",
    records: [
      {
        id: "LEG-ST-001",
        student: "Estudiante #601",
        doc: "43.XXX.771",
        status: "Regular"
      },
      {
        id: "LEG-ST-002",
        student: "Estudiante #602",
        doc: "44.XXX.233",
        status: "Regular"
      }
    ]
  },
  sec_priv: {
    title: "Secundaria Privada",
    records: [
      {
        id: "LEG-SPR-001",
        student: "Estudiante #701",
        doc: "42.XXX.112",
        status: "Regular"
      },
      {
        id: "LEG-SPR-002",
        student: "Estudiante #702",
        doc: "43.XXX.882",
        status: "Regular"
      }
    ]
  }
};

export const RBAC_PERMISSIONS = {
  Administrador:
    "Nivel Root: Configuración de la plataforma, alta de usuarios, asignación de roles e integraciones generales.",
  Directivo:
    "Nivel Supervisión: Consulta de reportes generales, aprobación de trámites y auditoría institucional.",
  Secretaría:
    "Nivel Gestión: Carga y actualización de legajos de alumnos/docentes y matriculación.",
  Preceptor:
    "Nivel Operativo: Carga de asistencia, tardanzas, retiros anticipados y partes de convivencia.",
  Docente:
    "Nivel Pedagógico: Carga de calificaciones, informes cualitativos, planificaciones y asistencia.",
  Tutor:
    "Nivel Consulta: Visualización restringida de boletines, faltas y actualización de datos de contacto."
};
