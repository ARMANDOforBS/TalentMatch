package com.talentmatch.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Respuesta genérica para las API.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApiResponse {
    private boolean exito;
    private String mensaje;
}
