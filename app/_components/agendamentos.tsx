import { Card, CardContent } from "@/app/_components/ui/card";
import { Badge } from "@/app/_components/ui/badge";

const Agendamentos = () => {
    return (
        <div>
            <h2 id="agendamentos-title" className="text-xl font-semibold">
                Agendamentos
            </h2>

            <Card className="mt-4 grid grid-cols-2 gap-0 p-0">
                <CardContent className="flex min-w-0 flex-col gap-2 p-4 sm:p-6">
                    <Badge className="rounded-full bg-violet-950 px-3 py-1 text-sm font-medium text-violet-400 hover:bg-violet-950">
                        Status
                    </Badge>

                    <div>
                        Serviço
                    </div>
                    <div>
                        Perfil foto
                    </div>
                </CardContent>

                <CardContent className="flex min-w-0 flex-col gap-2 border-l p-4 sm:p-6">
                    <div>mes</div>
                    <div>dias=</div>

                    <div>hora</div>

                </CardContent>
            </Card>

        </div>
    );
};

export default Agendamentos;
