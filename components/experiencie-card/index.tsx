import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { itemExperiencie } from "./data"



export default function ExperiencieCard() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {itemExperiencie.map((experience) => (
        <Card key={experience.id} className="w-full">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Columna izquierda - Fecha */}
              <div className="md:col-span-1">
                <span className="text-sm text-muted-foreground">
                  {experience.start} - {experience.finalice}
                </span>
              </div>

              {/* Columna derecha - Contenido */}
              <div className="md:col-span-3 space-y-4">
                <h3 className="text-lg font-semibold">{experience.role}</h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {experience.tags.map((tag, index) => (
                    <Badge key={index} variant="default" className="bg-blue-500 hover:bg-blue-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}