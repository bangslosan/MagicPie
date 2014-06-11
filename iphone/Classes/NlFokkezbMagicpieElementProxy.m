/**
 * MagicPie
 *
 * Created by Fokke Zandbergen
 * Copyright (c) 2014 Fokke Zandbergen. All rights reserved.
 */

#import "NlFokkezbMagicpieElementProxy.h"
#import "TiUtils.h"

@implementation NlFokkezbMagicpieElementProxy

-(void)_destroy
{
    RELEASE_TO_NIL(pieElement);
    
    NSLog(@"[PROXY LIFECYCLE EVENT] _destroy");
}

-(void)_initWithProperties:(NSDictionary *)properties
{
    NSLog(@"[PROXY LIFECYCLE EVENT] _initWithProperties %@", properties);
    
    CGFloat value = [TiUtils floatValue:@"value" properties:properties];
    TiColor *color = [TiUtils colorValue:@"color" properties:properties];
    
    pieElement = [PieElement pieElementWithValue:value color:[color _color]];

    [super _initWithProperties:properties];
}

@end