class Cotizador
  def calcular (extension, tipo, plaga)
     cost = calcula_extension extension
     if cost == 0
       return nil # SE COTIZA EN SITIO
     end
     if tipo == "rodent"
        numbers = costo_roedor extension
     else
        numbers = costo_plaga plaga
     end
     cost + numbers
  end
  def calcula_extension (extension)
     case extension
     when "min"
        650
     when "med"
       850
     else
       0
     end
  end
  def costo_plaga (plaga)
     cost = 250
     elements = plaga.size - 1
     if elements > 0
        elements * cost
     else
       0
     end
  end
  def costo_roedor (extension)
     case extension
     when "min"
       340
     else
       500
     end
  end
end
