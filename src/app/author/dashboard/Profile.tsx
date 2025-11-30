import React from 'react'
import {TabsContent} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {type DashboardData} from "./page"

const Profile = ({data}: { data: DashboardData }) => {
    return (
        <TabsContent value="profile">
            <Card>
                <CardHeader>
                    <CardTitle>Profile Details</CardTitle>
                    <CardDescription>Your personal information as it appears on published papers.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <div className="text-sm font-medium text-muted-foreground">Full Name</div>
                            <div className="p-3 bg-muted/50 rounded-md border text-sm">
                                {data.profile.firstName} {data.profile.lastName}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium text-muted-foreground">Email Address</div>
                            <div className="p-3 bg-muted/50 rounded-md border text-sm">{data.profile.email}</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium text-muted-foreground">Organization</div>
                            <div className="p-3 bg-muted/50 rounded-md border text-sm">{data.profile.organization}</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm font-medium text-muted-foreground">Country</div>
                            <div className="p-3 bg-muted/50 rounded-md border text-sm">{data.profile.country}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>

    )
}
export default Profile
