class Cotizador
  def calcular (extension, plaga)
     cost = calcula_extension extension
     numbers = costo_plaga plaga
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
end
